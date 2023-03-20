<template>
  <div class="secondary-navbar" v-if="isNavHidden">
    <i class="fa fa-tasks fa-2x" aria-hidden="true" @click="toggleMenu"></i>
    <div class="menu" :class="{ 'menu-open': isMenuOpen }">
      <ul :class="{ hidden: !isMenuOpen }">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  name: "SecondaryNavbar",
  props: {
    isNavHidden: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    staggering() {
      const anime = this.$anime;
      anime({
        targets: "i",
        opacity: [0, 1],
        duration: 1000,
      });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const anime = this.$anime;
      if (this.isMenuOpen) {
        anime({
          targets: ".menu li",
          opacity: [0, 1],
          translateY: ["50%", 0],
          duration: 500,
          easing: "easeOutExpo",
          delay: anime.stagger(100),
        });
      } else {
        anime({
          targets: ".menu li",
          opacity: [1, 0],
          translateY: [0, "-50%"],
          duration: 500,
          easing: "easeOutExpo",
          delay: anime.stagger(100),
        });
      }
    },
  },
  mounted() {
    this.staggering();
  },
};
</script>

<style scoped>
i {
  @apply text-indigo-700 bg-indigo-100 p-3 rounded-full fixed bottom-14 right-7 shadow-xl hover:scale-125 transform duration-300 ease-in-out transition-all cursor-pointer;
}
.menu {
  @apply relative;
}
.menu ul {
  @apply absolute right-3 bottom-32;
}
</style>
