<template>
  <div class="flex items-center justify-between">
    <div class="sm:ml-8">
      <h3 class="text-lg font-medium sm:text-xl">
        <h1 class="hover:underline">
          {{ task.text }}
        </h1>
      </h3>

      <div class="mt-4 sm:flex sm:items-center justify-start">
        <div class="flex items-center text-gray-500">
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p class="text-xs font-medium">{{ task.day }}</p>
        </div>
      </div>
    </div>
    <i
      class="fas fa-times cursor-pointer text-red-500 text-xl"
      @click="$emit('delete-task', task.id)"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
