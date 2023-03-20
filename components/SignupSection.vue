<template>
  <div class="aboutSection" v-if="showSignUpSection">
    <form>
      <label for="name">Name</label><input type="text" /><label for="email"
        >Email</label
      ><input type="email" /><label for="password">Password</label
      ><input type="password" /><label for="password2">Confirm Password</label
      ><input type="password" />
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.showSignUp) {
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
    showSignUpSection() {
      return this.$store.state.showSignUp;
    },
  },
  watch: {
    "$store.state.showSignUp"(newValue, oldValue) {
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
