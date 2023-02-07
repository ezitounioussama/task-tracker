<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <form @submit="onSubmit" class="mx-auto mb-0 max-w-md space-y-4">
      <div>
        <label for="task" class="sr-only">Task</label>

        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Task"
            v-model="taskText"
          />

          <span class="absolute inset-y-0 right-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="dayTime" class="sr-only">Day & Time</label>
        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            v-model="date"
            placeholder="Enter Day & Time"
          />

          <span class="absolute inset-y-0 right-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </span>
        </div>
      </div>

<<<<<<< HEAD
      <div class="flex items-center justify-start">
        <div class="flex items-center">
=======
      <div class="flex items-center justify-between">
        <div>
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
          <input
            id="link-checkbox"
            type="checkbox"
            v-model="reminder"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Set Reminder
          </label>
        </div>
<<<<<<< HEAD
=======
        <input
          type="submit"
          name="submit"
          id="submit"
          class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
        />
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
<<<<<<< HEAD
      taskText: "",
      reminder: false,
      date: "",
=======
      text: "",
      day: "",
      reminder: false,
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.taskText) {
        alert("Add A Task First ");
        return;
      }

      const newTask = {
<<<<<<< HEAD
        id: Math.floor(Math.random() * 100000),
        taskText: this.taskText,
        date: this.date,
        reminder: this.reminder,
      };
=======
        // id: Math.floor(Math.random() * 100000),
        text: this.taskText,
        day: this.date,
        reminder: this.reminder,
      };

      this.$emit("add-Task", newTask);
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
    },
  },
};
</script>
