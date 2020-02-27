<template>
  <div id="app">
    <Navbar></Navbar>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.app-container{
    margin-top: 2em;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 60%;
    padding-bottom: 4em;
    
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

</style>
