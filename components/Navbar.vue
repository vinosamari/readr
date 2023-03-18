<template>
  <section>
    <div class="logo">
      <img src="https://i.postimg.cc/d3MG7tgP/document.png" alt="logo" />
      <span>Readr.Reply</span>
    </div>
    <div class="loginGroup">
      <form @submit.prevent="loginUser">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="you@example.com"
        />
        <button>Login</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    loginUser() {},
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dokdo&display=swap");
section {
  @apply flex p-3 justify-between w-3/4 shadow-2xl rounded-3xl fixed left-40 top-10 px-8;
}
.logo {
  @apply flex gap-1 items-center;
}
.logo span {
  font-family: "Dokdo";
  @apply text-2xl tracking-wide text-indigo-900;
}
img {
  @apply w-8 h-8;
}
form {
  font-family: "Dokdo";
  @apply text-base tracking-widest;
}
input {
  @apply shadow-lg rounded-xl px-3 py-1 focus:ring-0 hover:cursor-pointer hover:ring-indigo-700;
}
button {
  @apply bg-indigo-500  rounded-xl shadow-lg px-3 py-1 text-xl hover:bg-white hover:text-indigo-800 text-white;
}
</style>
