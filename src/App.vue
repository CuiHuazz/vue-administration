<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { routes } from '@/router'
export default {
  data() {
    return {
      routes
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #e9eef3;
  width: 100%;
}
</style>
