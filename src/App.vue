<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        Here is some <code v-text="'<ela-table></ela-table>'"></code> examples below
      </p>
      <ElaTableExamples></ElaTableExamples>
    </div>
  </div>
</template>

<script>
import ElaTableExamples from './components/ElaTableExamples.vue'

export default {
  name: 'app',
  components: {
    ElaTableExamples
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
