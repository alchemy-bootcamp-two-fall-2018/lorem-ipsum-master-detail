<template>
  <div id="app">
    <Header />
    <Ipsums />
  </div>
</template>

<script>
import Ipsums from './Ipsums.vue';
import Header from './components/Header.vue';

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
}
</style>
