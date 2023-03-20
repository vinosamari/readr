<template>
  <div class="secondary-navbar" v-if="isNavHidden">
    <i class="fa fa-tasks fa-2x" aria-hidden="true" @click="toggleMenu"></i>
    <div class="menu" :class="{ 'menu-open': isMenuOpen, hidden: !isMenuOpen }">
      <ul>
        <li><i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i></li>
        <li><i class="fa fa-file-text fa-2x" aria-hidden="true"></i></li>
        <li><i class="fa fa-stack-exchange fa-2x" aria-hidden="true"></i></li>
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
      const items = document.querySelectorAll(".menu li");
      const staggerDelay = 100;

      // reverse the order of the items
      const reversedItems = Array.prototype.slice.call(items).reverse();

      this.isMenuOpen = !this.isMenuOpen;
      const anime = this.$anime;
      if (this.isMenuOpen) {
        anime({
          targets: reversedItems,
          opacity: [0, 1],
          translateY: ["50%", 0],
          duration: 1000,
          easing: "easeOutExpo",
          delay: (el, i) => i * staggerDelay,
        });
      } else {
        anime({
          targets: items,
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
  @apply fixed right-10 bottom-0 flex items-center justify-center;
}
li {
  @apply mx-8;
}
</style>
