<template>
  <div @click="checkModal">
    <about></about>
    <hero-section></hero-section>
  </div>
</template>

<script>
import About from "~/components/About.vue";
import FileSection from "~/components/FileSection.vue";
export default {
  components: { FileSection, About },
  name: "IndexPage",
  methods: {
    checkModal() {
      let about = this.$store.state.showAbout;
      if (about) {
        this.$store.commit("TOGGLE_ABOUT");
        return;
      }
      return;
    },
  },
};
</script>
