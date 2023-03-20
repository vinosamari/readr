<template>
  <div>
    <p>
      Are you tired of sifting through endless documents to find the information
      you need? Do you find yourself wasting hours on research and still not
      finding the answers you're looking for? Say goodbye to frustration and
      wasted time with Readr - your personal research assistant! With our
      powerful AI algorithm, we break down complex content into digestible
      chunks, giving you the information you need without overwhelming you with
      unnecessary details. Join us today and discover the wonders of the world
      with Readr!
    </p>
    <button @click="$router.push('/#filesection')">Try it out</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  font-family: "Dokdo";
  @apply min-h-screen text-center flex flex-col items-center justify-center text-2xl px-32;
}
p {
  @apply text-indigo-800 uppercase;
}
button {
  @apply bg-indigo-700 px-3 py-1 rounded-2xl shadow-xl text-xl my-4 text-white;
}
</style>
