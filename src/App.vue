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
  background-image: url('https://images.unsplash.com/photo-1524055697392-928c7665644d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8aead7f7e8ee3879399c5628fb0066b&auto=format&fit=crop&w=1567&q=80');
}
</style>
