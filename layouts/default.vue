<template>
  <div>
    <navbar v-if="showNavbar" :class="{ 'nav-hidden': !showNavbar }"></navbar>
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
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
@import url("https://fonts.googleapis.com/css2?family=Baumans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap");
body {
  @apply transition-all duration-500 ease-in-out;
}

.nav-hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
</style>
