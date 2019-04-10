<template>
  <div id="app">
    <img src="https://img.icons8.com/wired/64/000000/checklist.png">
    <router-view/>
  </div>
</template>

<script>
/* import TodoList from '@/components/TodoList' */
export default {
  name: 'App'
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
