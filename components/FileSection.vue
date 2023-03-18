<template>
  <div>
    <form @submit.prevent="loadFile">
      <h2 class="subheader">Select a file to interact with:</h2>
      <section>
        <input type="file" ref="fileInput" @change="setTitle" />
        <button type="submit">Upload</button>
      </section>
      <section>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter url here..."
          :disabled="!fileTitle"
        />
        <button type="submit" class="btn">Submit Url</button>
      </section>
    </form>
    <h3 v-if="fileUploadProgress > 0" class="text-center">
      {{ fileUploadProgress }}% Uploaded
    </h3>
    <h3 v-if="fileTitle" class="text-center">
      {{ fileTitle }}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileUploadProgress: 0,
      fileTitle: "",
    };
  },
  methods: {
    async loadFile() {
      let fileObj = {
        title: this.fileTitle,
      };

      const file = this.$refs.fileInput.files[0];
      const storageRef = this.$fire.storage.ref("files/").child(this.fileTitle);
      try {
        storageRef.put(file).on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.fileUploadProgress = progress;
            console.log("Upload is " + progress + "% done");
            // console.log(`Snapshot state ${snapshot.state}`);
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            storageRef.getDownloadURL().then(async (downloadURL) => {
              fileObj = { ...fileObj, url: downloadURL };

              let dbFiles = $nuxt.$fire.firestore.collection("files");
              await dbFiles
                .doc()
                .set(fileObj)
                .then(() => {
                  console.log("Document successfully written!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });

              this.fileTitle = "";
              this.fileUploadProgress = 0;
              console.log("File available at", downloadURL);
            });
          }
        );
      } catch (e) {
        alert(e.message);
      }
    },
    setTitle(event) {
      // IF THERE ARE ANY FILES READY
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.fileTitle = file.name;
      } else {
        this.fileTitle = "";
      }
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Baumans";
  @apply text-center bg-gradient-to-br from-indigo-400 via-indigo-300 min-h-screen px-4 flex flex-col justify-center mb-32;
}
.header {
  font-family: "Encode Sans Expanded";
  @apply text-3xl font-bold uppercase tracking-wider my-8;
}
form {
  @apply bg-indigo-200 bg-opacity-40 flex flex-col mx-auto p-5 w-3/4;
}
button,
input[type="file"] {
  @apply bg-indigo-700  text-white px-4 py-2 rounded-xl my-3 tracking-wider capitalize hover:cursor-pointer;
}
input {
  @apply bg-indigo-400  px-4 w-3/4 py-2 placeholder-black shadow-md rounded-2xl focus:bg-white focus:text-black;
}
input[type="file"] {
  @apply w-3/4 shadow-md rounded-2xl my-10 text-sm bg-indigo-400;
}
input:disabled {
  @apply bg-opacity-40 placeholder:text-gray-200 shadow-inner;
}
button {
  @apply py-1 shadow-xl transform transition-all duration-300 ease-linear  hover:scale-105;
}
</style>
