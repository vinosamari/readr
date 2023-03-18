<template>
  <div class="aboutSection" v-if="showAboutSection">
    <h2>This is the about section</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setAnimation();
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: ".aboutSection",
        opacity: [0, 1],
        duration: 300,
      });
    },
  },
  computed: {
    showAboutSection() {
      return this.$store.state.showAbout;
    },
  },
};
</script>

<style scoped>
.aboutSection {
  @apply rounded-2xl bg-indigo-800 flex flex-col items-center justify-center shadow-xl text-white tracking-wider mx-auto fixed inset-0 w-3/4 h-1/2 top-1/4 z-50;
}
</style>
