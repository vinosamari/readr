<template>
  <div>
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
};
</script>
