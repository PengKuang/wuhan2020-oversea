<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SubmitInfo msg="Pray for Wuhan" />
  </div>
</template>

<script>
import SubmitInfo from './components/SubmitInfo.vue'

export default {
  name: 'app',
  components: {
    SubmitInfo
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
