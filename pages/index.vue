<template>
  <div @click="closeModal">
    <div class="notMobile">
      <about class=""></about>
      <signup-section></signup-section>
      <hero-section class=""></hero-section>
    </div>
    <section class="mobile">
      <div class="flex flex-col items-center justify-center gap-2">
        <img src="https://i.postimg.cc/d3MG7tgP/document.png" alt="logo" />
        <span class="my-10">Welcome to Readr!</span>
      </div>
      <p class="p-16 m-4 rounded-full shadow-md uppercase">
        Please use a tablet, laptop or desktop device for the optimal
        experience.
      </p>
    </section>
  </div>
</template>

<script>
import About from "~/components/About.vue";
import FileSection from "~/components/FileSection.vue";
import SignupSection from "~/components/SignupSection.vue";
export default {
  components: { FileSection, About, SignupSection },
  name: "IndexPage",
  methods: {
    closeModal() {
      if (this.$store.state.showAbout) {
        this.$store.commit("TOGGLE_ABOUT");
        return;
      }
      return;
    },
  },
};
</script>
<style scoped>
.notMobile {
  @apply md:block hidden;
}
.mobile {
  font-family: "Dokdo";
  @apply md:hidden flex flex-col justify-center items-center text-3xl tracking-widest text-center p-5;
}
img {
  @apply h-28 w-28;
}
</style>
