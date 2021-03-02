<template>
  <div id="app">
    <q-header></q-header>
    <router-view />
  </div>
</template>

<script>
import QHeader from '@/components/QHeader.vue'
export default {
  name: 'App',
  components: {
    QHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  font-size: 62.5%;
  body {
    margin: 0;
    background-color: #f5f5f5;
  }
}
</style>
