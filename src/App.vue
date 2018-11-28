<template>
  <div id="app">
    <Header/>
    <Ipsums :ipsums="ipsums"/>
    <AddIpsum/>
  </div>
</template>

<script>
import ipsumsApi from '../data.js';
import Ipsums from './components/Ipsums.vue';
import Header from './components/Header.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums()
    };
  },
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
  margin-top: 60px;
}
</style>
