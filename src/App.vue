<script setup>
import "./style.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
</script>
<template>
<<<<<<< HEAD
  <Header title="Task Tracker" />
  <AddTask />
=======
  <Header
    @toggle-task="toggleTask"
    title="Task Tracker"
    :showAddTask="showAddTask"
  />
  <div v-if="showAddTask">
    <AddTask @add-Task="addTask" />
  </div>
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
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
<<<<<<< HEAD
    return { tasks: [] };
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
=======
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

>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)
  },
};
</script>
