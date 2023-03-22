<template>
  <div class="aboutSection" v-if="showSignUpSection">
    <form @submit.prevent="signUp">
      <div>
        <label for="username">Username</label
        ><input type="text" v-model="username" />
      </div>
      <div v-if="username">
        <label for="email">Email</label><input type="email" v-model="email" />
      </div>
      <div v-if="email">
        <label for="password">Password</label
        ><input
          type="password"
          placeholder="p@5sW0rD"
          required
          v-model="pass1"
        />
      </div>
      <div v-if="email">
        <label for="password2">Confirm Password</label
        ><input
          type="password"
          placeholder="p@5sW0rD"
          required
          v-model="pass2"
        />
      </div>
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { SUPA } from "@/plugins/supabase";
export default {
  data() {
    return {
      username: "",
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  mounted() {
    if (this.$store.state.showSignUp) {
      this.setAnimation();
    }
  },
  methods: {
    setAnimation() {
      const anime = this.$anime;

      anime({
        targets: ".aboutContent",
        opacity: [0, 1],
        duration: 5000,
        delay: 700,
        easing: "easeInOutQuad",
      });

      anime({
        targets: ".aboutContent span",
        opacity: [0, 1],
        delay: anime.stagger(500), // increase delay by 100ms for each elements.
      });
      anime.play;
    },
    async signUp() {
      if (this.pass1 !== this.pass2)
        return this.$toast.error("Passwords don't match!");
      try {
        const { data, error } = await SUPA.auth.signUp({
          email: this.email,
          password: this.pass1,
          options: {
            data: {
              username: this.username,
            },
          },
        });
        if (data.user === null) {
          return this.$toast.error(error.message);
        } else {
          console.log(data);
          return this.$toast.success(`Successfully signed up ${this.username}`);
        }
      } catch (error) {
        this.$toast.error(error);
      }
    },
  },
  computed: {
    showSignUpSection() {
      return this.$store.state.showSignUp;
    },
  },
  watch: {
    "$store.state.showSignUp"(newValue, oldValue) {
      if (newValue === true) {
        this.setAnimation();
      }
    },
  },
};
</script>

<style scoped>
form {
  font-family: "Dokdo";
  @apply flex flex-col gap-1 items-center justify-center;
}
input {
  @apply rounded-xl mb-2 w-full  text-sm px-4 py-2 mx-auto text-black;
}
input[type="password"] {
  @apply text-black;
}
.aboutSection {
  @apply rounded-2xl bg-indigo-800 flex flex-col items-center justify-center shadow-xl text-white tracking-widest fixed inset-0 w-5/6 h-auto top-1/4 z-50 text-lg p-5 text-center leading-relaxed mx-auto;
}
h2 span {
  font-family: "Dokdo";
  @apply text-2xl bg-indigo-300 px-2 mx-1 text-indigo-800;
}
button {
  @apply bg-indigo-500  rounded-xl shadow-lg px-3 py-1 text-xl hover:bg-white hover:text-indigo-800 text-white hover:rounded-2xl transition-all duration-300 ease-in-out my-5;
}
/* form div {
  @apply flex flex-col items-center justify-center;
} */
</style>
