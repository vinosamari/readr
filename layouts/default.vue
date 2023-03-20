<template>
  <div>
    <navbar v-if="showNavbar" :class="{ 'nav-hidden': !showNavbar }"></navbar>
    <nuxt></nuxt>
    <my-footer></my-footer>
    <SecondaryNavbar
      :is-nav-hidden="isNavHidden"
      v-if="!showNavbar"
      :class="{ 'nav-hidden': !showNavbar }"
    />
  </div>
</template>

<script>
import MyFooter from "~/components/MyFooter.vue";
import SecondaryNavbar from "~/components/SecondaryNavbar.vue";
export default {
  components: { MyFooter, SecondaryNavbar },
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
