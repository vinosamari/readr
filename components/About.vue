<template>
  <div class="aboutSection" v-if="showAboutSection">
    <h2 class="aboutContent">
      Welcome to <span>Readr</span>, your smart and friendly personal research
      assistant that helps you unlock the power of knowledge. Just upload a file
      or input a URL, and our powerful algorithm breaks down complex content
      into digestible chunks, giving you the information you need without
      overwhelming you with unnecessary details. Think of <span>Readr</span> as
      your own personal fact-checker, separating fact from fiction and helping
      you make informed decisions. Whether you're a student, a researcher, or
      just someone who loves to learn, <span>Readr</span> is the perfect tool to
      help you navigate the vast landscape of information and discover hidden
      gems along the way. Start your journey today and unlock the wonders of the
      world.
    </h2>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.showAbout) {
      this.setAnimation();
    }
  },
  methods: {
    setAnimation() {
      const anime = this.$anime;

      anime({
        targets: ".aboutContent",
        opacity: [0, 1],
        duration: 5000,
        delay: 700,
        easing: "easeInOutQuad",
      });

      anime({
        targets: ".aboutContent span",
        opacity: [0, 1],
        delay: anime.stagger(500), // increase delay by 100ms for each elements.
      });
      anime.play;
    },
  },
  computed: {
    showAboutSection() {
      return this.$store.state.showAbout;
    },
  },
  watch: {
    "$store.state.showAbout"(newValue, oldValue) {
      if (newValue === true) {
        this.setAnimation();
      }
    },
  },
};
</script>

<style scoped>
.aboutSection {
  font-family: "Gloria Hallelujah";
  @apply rounded-2xl bg-indigo-800 flex flex-col items-center justify-center shadow-xl text-white tracking-widest mx-auto fixed inset-0 w-5/6 h-auto top-1/4 z-50 text-xl p-5 text-center leading-relaxed;
}
h2 span {
  font-family: "Dokdo";
  @apply text-2xl bg-indigo-300 px-2 mx-1 text-indigo-800;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.aboutContent.fade-enter-active,
.aboutContent.fade-leave-active {
  transition: opacity 3s ease-in-out;
}

.aboutContent.fade-enter,
.aboutContent.fade-leave-to {
  opacity: 0;
}
</style>
