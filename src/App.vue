<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h3>
      <code v-text="'<ela-board>'"></code> example
    </h3>

    <ElaBoardExamples></ElaBoardExamples>

    <h3>
      <code v-text="'<ela-table>'"></code> example
    </h3>
    <ElaTableExamples></ElaTableExamples>
  </div>
</template>

<script>
import ElaTableExamples from "./components/ElaTableExamples.vue";
import ElaBoardExamples from "./components/ElaBoardExamples.vue";

export default {
  name: "app",
  components: {
    ElaTableExamples,
    ElaBoardExamples
  },
  data() {
    return {
      
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
