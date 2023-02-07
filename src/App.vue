<script setup>
import "./style.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
</script>
<template>
  <Header
    @toggle-task="toggleTask"
    title="Task Tracker"
    :showAddTask="showAddTask"
  />
  <div v-if="showAddTask">
    <AddTask @add-Task="addTask" />
  </div>
  <Tasks
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
</template>

<script>
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return { tasks: [], showAddTask: false };
  },
  methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "This Task Has Been Added",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: "bg-white p-1 rounded-lg shadow-xl",
          popup: "text-sm",
          header: "text-sm font-medium",
          title: "text-xl font-bold",
          closeButton: "absolute top-0 right-0",
        },
      });
    },

    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => {
            return task.id !== id;
          }))
        : alert("ERROR 404");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "This Task Has Been Deleted",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: "bg-white p-1 rounded-lg shadow-xl",
          popup: "text-sm",
          header: "text-sm font-medium",
          title: "text-xl font-bold",
          closeButton: "absolute top-0 right-0",
        },
      });
    },
    async toggleReminder(id) {
      const taskToggle = await this.fetchTask(id);
      const updateTask = { ...taskToggle, reminder: !taskToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task;
      });
    },
    toggleTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
