<template>
  <div id="app">
    <Header/>
    <Ipsums/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums  from './components/Ipsums.vue';

export default {
  components: {
    Ipsums,
    Header
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
  margin-top: 40px;
}
body {
  background-image: url('https://images.unsplash.com/photo-1497897271578-5f45bb7a8400?ixlib=rb-0.3.5&s=604140e56a39d0ca58d53a799c7c3b5d&auto=format&fit=crop&w=800&q=60');
}
</style>
