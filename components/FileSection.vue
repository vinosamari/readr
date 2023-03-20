<template>
  <div id="filesection">
    <form @submit.prevent="handleFileUpload">
      <h2 class="subheader">Select a file to interact with:</h2>
      <section v-if="!urlFileTitle">
        <input type="file" ref="fileInput" @change="setTitle" />
        <button type="submit">Upload</button>
      </section>
      <section class="flex gap-2 items-center" v-if="!uploadFileTitle">
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter url here..."
          v-model="urlFileTitle"
        />

        <button type="submit" class="btn" :disabled="!urlFileTitle">
          Submit
        </button>
      </section>
    </form>
    <h3 v-if="fileUploadProgress > 0" class="text-center">
      {{ fileUploadProgress }}% Uploaded
    </h3>
  </div>
</template>

<script>
import { SUPA } from "@/plugins/supabase";
export default {
  mounted() {
    this.fadeElements();
  },
  data() {
    return {
      fileUploadProgress: 0,
      urlFileTitle: "",
      uploadFileTitle: "",
      fileAvailable: false,
    };
  },
  methods: {
    handleFileUpload(event) {
      if (!event.target) {
        this.$toast.error("No file loaded!", {
          timeout: 2000,
        });
        return;
      } else {
        const file = event.target.files[0];
        this.uploadFile(file);
      }
    },
    async uploadFile(file) {
      let fileObj = {
        title: this.uploadFileTitle ? this.uploadFileTitle : this.urlFileTitle,
      };
      console.log(`[TITLE]: ${fileObj.title}`);
      const { data, error } = await SUPA.storage
        .from("files")
        .upload(`/${fileObj.title}`, file);
      if (error) {
        console.log(`[ERROR: ]${error.message}`);
      } else {
        console.log(`Upload complete ${data}`);
      }
    },
    // async loadFile() {
    //   let fileObj = {
    //     title: this.uploadFileTitle ? this.uploadFileTitle : this.urlFileTitle,
    //   };

    //   const file = this.$refs.fileInput.files[0];
    //   const storageRef = this.$fire.storage.ref("files/").child(fileObj.title);
    //   try {
    //     storageRef.put(file).on(
    //       "state_changed",
    //       (snapshot) => {
    //         // Observe state change events such as progress, pause, and resume
    //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //         var progress =
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         this.fileUploadProgress = progress;
    //         console.log("Upload is " + progress + "% done");
    //         // console.log(`Snapshot state ${snapshot.state}`);
    //       },
    //       (error) => {
    //         // Handle unsuccessful uploads
    //       },
    //       () => {
    //         // Handle successful uploads on complete
    //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //         storageRef.getDownloadURL().then(async (downloadURL) => {
    //           fileObj = { ...fileObj, url: downloadURL };

    //           let dbFiles = $nuxt.$fire.firestore.collection("files");
    //           await dbFiles
    //             .doc()
    //             .set(fileObj)
    //             .then(() => {
    //               console.log("Document successfully written!");
    //             })
    //             .catch((error) => {
    //               console.error("Error writing document: ", error);
    //             });

    //           this.urlFileTitle = "";
    //           this.uploadFileTitle = "";
    //           this.fileUploadProgress = 0;
    //           console.log("File available at", downloadURL);
    //         });
    //       }
    //     );
    //   } catch (e) {
    //     alert(e.message);
    //   }
    // },
    setTitle(event) {
      // IF THERE ARE ANY FILES READY
      if (event.target.files.length > 0) {
        this.fileAvailable = true;
        const file = event.target.files[0];
        this.uploadFileTitle = file.name;
      } else {
        this.uploadFileTitle = "";
        this.fileAvailable = false;
      }
    },
    fadeElements() {
      const anime = this.$anime;

      anime({
        targets: "form section",
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(300),
        easing: "easeInOutQuad",
      });
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Baumans";
  @apply text-center bg-gradient-to-br from-indigo-400 via-indigo-300 min-h-screen px-4 flex flex-col justify-center;
}
.subheader {
  font-family: "Dokdo";
  @apply text-xl font-bold uppercase tracking-wider my-8;
}
form {
  font-family: "Dokdo";
  @apply flex flex-col mx-auto;
}
button,
input[type="file"] {
  @apply bg-indigo-700  text-white px-4 py-2 rounded-xl my-3 tracking-wider capitalize hover:cursor-pointer;
}
input {
  @apply bg-indigo-400  px-4 w-3/4 py-2 placeholder-black shadow-md rounded-2xl focus:bg-white focus:ring-indigo-500;
}
input[type="file"] {
  @apply w-3/4 shadow-md rounded-2xl my-10 text-sm bg-indigo-400 focus:ring-indigo-500;
}
button:disabled {
  @apply bg-indigo-200 shadow-inner text-indigo-300;
}
button {
  @apply py-1 shadow-xl transform transition-all duration-300 ease-linear  hover:scale-105;
}
</style>
