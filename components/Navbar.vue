<template>
  <section class="navbar notMobile">
    <div class="logo">
      <img src="https://i.postimg.cc/d3MG7tgP/document.png" alt="logo" />
      <span>Readr</span>
    </div>
    <div class="navLinks">
      <button
        @click="$store.commit('TOGGLE_ABOUT')"
        :class="{
          active: $store.state.showAbout,
        }"
      >
        <i class="fa fa-info-circle fa-lg"></i>
      </button>
      <button
        @click="$store.commit('TOGGLE_SIGNUP')"
        :class="{
          active: $store.state.showSignUp,
        }"
      >
        <i class="fa fa-user-plus fa-lg"></i>
      </button>
      <button><i class="fa fa-question fa-lg"></i></button>
    </div>
    <div class="loginGroup" v-if="$store.state.currentUser === null">
      <form @submit.prevent="loginUser">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="you@example.com"
        />
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="p@5sW0rD"
        />
        <button @click="$store.commit('TOGGLE_USER')">Login</button>
      </form>
    </div>
    <div v-else>
      <button @click="$store.commit('TOGGLE_USER')">Log out</button>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.staggering();
  },
  methods: {
    loginUser() {},
    staggering() {
      const anime = this.$anime;
      anime({
        targets: ".navbar div",
        opacity: [0, 1],
        delay: anime.stagger(250), // increase delay by 100ms for each elements.
        duration: 1500,
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
section {
  font-family: "Dokdo";
  @apply flex  justify-between w-3/4 shadow-2xl rounded-3xl fixed left-40 top-10 px-8 py-5;
}
.logo {
  @apply flex gap-1 items-center;
}
.logo span {
  @apply text-2xl tracking-wide text-indigo-900;
}
img {
  @apply w-8 h-8 rounded shadow-xl;
}
form {
  font-family: "Dokdo";
  @apply text-base tracking-widest;
}
input {
  @apply shadow-lg rounded-xl px-3 py-1 focus:ring-0 hover:cursor-pointer hover:ring-indigo-700 text-center;
}
button {
  @apply bg-indigo-500  rounded-xl shadow-lg px-3 py-1 text-xl hover:bg-white hover:text-indigo-800 text-white hover:rounded-2xl transition-all duration-300 ease-in-out;
}

.navLinks {
  @apply flex;
}
.navLinks button {
  @apply text-lg tracking-tight shadow-md hover:shadow-xl bg-transparent text-indigo-700 rounded-sm transition-all duration-300 ease-in-out mx-2 hover:bg-indigo-700 hover:text-white hover:rounded-2xl  items-center flex;
}
.navLinks button.active {
  @apply bg-indigo-700 text-white rounded-2xl;
}
.notMobile {
  @apply md:flex hidden;
}
</style>
