<template>
  <button
    @click="onClick()"
    :class="bgColor"
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
      console.log("click");
    },
  },
};
</script>
