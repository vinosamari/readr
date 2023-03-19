<template>
  <footer>
    <div class="links">
      <a href="https://github.com/vinosamari/readr" target="_blank"
        ><i class="fa fa-github fa-2x" aria-hidden="true"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  @apply w-full px-5 py-2 flex items-center justify-center gap-2 bg-indigo-300 bg-opacity-90 fixed bottom-0;
}
a {
  @apply rounded-full p-1 shadow-xl text-indigo-600;
}
i {
  @apply hover:scale-125 transform transition-all duration-500 ease-in-out;
}
</style>
