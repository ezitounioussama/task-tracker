<script setup>
import "./style.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
</script>
<template>
  <Header title="Task Tracker" />
  <AddTask />
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
    return { tasks: [] };
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
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
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Learning VueJS From Scratch",
        day: "10/10/2023",
        reminder: false,
      },
      {
        id: 2,
        text: "Applying What We Learn In Mini Projects",
        day: "15/10/2023",
        reminder: false,
      },
      {
        id: 3,
        text: "Creating a Project Like An E-commerce Website or StockManagement Website",
        day: "20/10/2023",
        reminder: false,
      },
    ];
  },
};
</script>
