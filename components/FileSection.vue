<template>
  <div>
    <h1 class="header">File Upload Section</h1>
    <form @submit.prevent="loadFile">
      <h2 class="subheader">Select the file you want to interact with:</h2>
      <section>
        <input type="file" /> <button type="submit">Upload</button>
      </section>
      <h2>Or</h2>
      <section>
        <input type="url" name="url" id="url" placeholder="Enter a URL..." />
        <button type="submit">Upload via Url</button>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    loadFile() {},
  },
};
</script>

<style scoped>
div {
  @apply text-center bg-indigo-400 min-h-screen p-4;
}
.header {
  @apply text-3xl font-bold uppercase tracking-wider my-8;
}
form {
  @apply bg-gray-200 bg-opacity-40 flex flex-col mx-auto font-sans;
}
button,
input[type="file"] {
  @apply bg-indigo-700 text-white px-4 py-2 rounded my-3 tracking-wider capitalize;
}
input {
  @apply bg-indigo-400 px-4 w-3/4 py-2 placeholder-black;
}
input[type="file"] {
  @apply w-3/4;
}
</style>
