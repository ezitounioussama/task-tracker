<template>
  <button
    @click="onClick()"
<<<<<<< HEAD
    :class="bgColor"
=======
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
    class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
  >
    {{ action }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    action: String,
    bgColor: String,
  },
  methods: {
    onClick() {
<<<<<<< HEAD
      console.log("click");
=======
      this.$emit("toggle-task");
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
    },
  },
};
</script>
