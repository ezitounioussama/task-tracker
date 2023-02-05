<template>
  <article
    @dblclick="$emit('toggle-reminder', task.id)"
    :key="task.id"
    v-for="task in tasks"
    :class="[task.reminder ? 'border-l-8 border-l-red-500' : '']"
    class="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 mx-5 md:mx-10 xl:mx-44 sm:mx-5 mt-4"
  >
    <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
  </article>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: { tasks: Array },
  components: { Task },
  emits: ["delete-task", "toggle-reminder"],
};
</script>
