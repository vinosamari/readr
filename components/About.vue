<template>
  <div class="aboutSection" v-if="showAboutSection">
    <h2 class="aboutContent">
      Discover the power of knowledge with <span>Readr</span> - your personal
      research assistant! Our friendly chat interface makes it easy to upload a
      file or input a URL, and our powerful algorithm breaks down complex
      content into digestible chunks, giving you the information you need
      without overwhelming you with unnecessary details. With
      <span>Readr</span> as your personal fact-checker, you can separate fact
      from fiction and make informed decisions. In the next update, we're adding
      exciting new features to make your experience even more engaging! Our chat
      bot will have its own unique personality, bringing an added level of fun
      and interest to your research journey. At <span>Readr</span>, we value
      your privacy. We never store any data unless you log in with your email
      address, in which case we create a secure storage bucket for you. By
      default, documents and conversation history have a 72-hour shelf life,
      ensuring that your sensitive data is safe yet accessible. Join the
      <span>Readr</span> community today and unlock hidden gems in the vast
      landscape of information!
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
  @apply rounded-2xl bg-indigo-800 flex flex-col items-center justify-center shadow-xl text-white tracking-widest mx-auto fixed inset-0 w-5/6 h-auto top-1/4 z-50 text-lg p-5 text-center leading-relaxed;
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
