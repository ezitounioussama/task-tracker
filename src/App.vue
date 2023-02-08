<script setup>
import "./style.css";
import Header from "./components/Header";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <Header
    @toggle-task="toggleTask"
    title="Task Tracker"
    :showAddTask="showAddTask"
  />

  <router-view :showAddTask="showAddTask"></router-view>
  <Footer />
</template>

<script>
export default {
  name: "App",
  components: {
    Header,

    Footer,
  },
  data() {
    return { showAddTask: false };
  },
  methods: {
    toggleTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>
