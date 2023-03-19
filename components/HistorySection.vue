<template>
  <div class="wrapper">
    <h1 class="header">History</h1>
    <section v-if="$store.state.currentUser">
      <!-- DISPLAY HISTORY -->
    </section>
    <section v-else>
      <p>Nothing to see here. Log in to access your conversation history.</p>
    </section>
    <!-- <table class="table-auto">
      <thead class="">
        <tr>
          <th>File</th>
          <th>Last Used</th>
          <th>Saved Responses</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="history.length > 0">
        <tr>
          <td>
            {{
              truncateFilename(
                "The Sliding Mr. Bones (Next Stop, Pottersville).pdf"
              )
            }}
          </td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
          <td><i class="fa fa-trash"></i></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
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
  @apply text-center text-xs italic leading-9 tracking-wider p-5 rounded-2xl shadow;
}
table {
  font-family: "Baumans";
  @apply text-sm w-full;
}
tr {
  @apply flex items-center gap-3 justify-between whitespace-pre;
}
</style>
