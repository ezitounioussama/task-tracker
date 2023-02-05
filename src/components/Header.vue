<template>
  <header aria-label="Page Header" class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ title }}
          </h1>
        </div>

        <div
          class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"
        >
          <Button action="add task" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>
