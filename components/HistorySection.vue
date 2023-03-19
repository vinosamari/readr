<template>
  <div class="wrapper">
    <h1 class="header">History</h1>
    <section v-if="$store.state.currentUser !== null">
      <!-- DISPLAY HISTORY -->
      <table class="">
        <thead class="">
          <tr>
            <th>File</th>
            <th>Last Used</th>
            <th>Saved Responses</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class=""
            v-for="history in $store.state.currentUser.history"
            :key="history.filename"
          >
            <td class="text-base">
              {{ truncateFilename(history.filename) }}
            </td>
            <td>{{ history.lastConversation }}</td>
            <td class="text-lg">{{ history.savedResponses.length }}</td>
            <td><i class="fa fa-trash fa-lg"></i></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section v-else>
      <p>
        Nothing to see here yet. Log in to access your conversation history.
      </p>
    </section>
  </div>
</template>

<script>
import { SUPA } from "@/plugins/supabase";
export default {
  mounted() {
    this.fadeElements();
  },
  methods: {
    truncateFilename(filename, maxLength = 30) {
      const extension = filename.split(".").pop();
      const basename = filename.substring(
        0,
        filename.length - extension.length - 1
      );
      const truncatedBasename = `${basename.substring(0, maxLength)}${
        basename.length > maxLength ? "..." : ""
      }`;
      return `${truncatedBasename}.${extension}`;
    },
    fadeElements() {
      const anime = this.$anime;

      anime({
        targets: "div section",
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(400),
        easing: "easeInOutQuad",
      });
    },
  },
  computed: {
    history() {
      if (this.$store.state.currentUser) {
        return this.$store.state.currentUser.history
          ? this.$store.state.currentUser.history
          : [];
      }
      return [];
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply min-h-screen p-10 bg-gradient-to-bl from-indigo-400 via-indigo-300 flex flex-col items-center;
}
h1 {
  font-family: "Dokdo";
  @apply text-2xl mt-56;
}
p {
  font-family: "Dokdo";
  @apply text-center text-lg leading-9 tracking-wider p-2 rounded-2xl shadow;
}
table {
  font-family: "Dokdo";
  @apply w-full table-fixed text-xs text-center my-3 p-2;
}
th {
  @apply text-lg;
}
tr {
  @apply p-2 even:bg-indigo-100 odd:bg-indigo-200;
}
i {
  @apply p-2 rounded-2xl shadow-md hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-125;
}
</style>
