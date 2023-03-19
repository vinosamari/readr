<template>
  <div>
    <navbar v-if="showNavbar" :class="{ 'nav-hidden': !showNavbar }"></navbar>
    <nuxt></nuxt>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "~/components/MyFooter.vue";
export default {
  components: { MyFooter },
  data() {
    return {
      showNavbar: true,
      scrollPosition: 0,
      isNavHidden: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const isNavHidden = scrollPosition > 100; // Update this value based on your desired threshold
      this.showNavbar = !isNavHidden;
      this.isNavHidden = isNavHidden; // Update the value of the new data property
      this.scrollPosition = scrollPosition;
    },
  },
};
</script>

<style>
body {
  @apply transition-all duration-500 ease-in-out bg-indigo-400 bg-opacity-80;
}

.nav-hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
</style>
