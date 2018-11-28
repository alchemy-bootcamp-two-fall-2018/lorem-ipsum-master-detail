<template>
  <div id="app">
    <div class = "header">
      <Header/>
    </div>
    <div class = "Ipsums">
      <Ipsums/>
    </div>
  </div>

  
</template>

<script>
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';

export default {
  name: 'app',
  components: {
    Header,
    Ipsums
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
