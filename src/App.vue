<template>
  <div id="app">
    <Header/>
    <h2>Does This App.vue Render Its Template?</h2>
  </div>
</template>

<script>
import ipsumApi from './services/ipsumApi.js';
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';
import IpsumDetail from './components/IpsumDetail.vue';
import AddIpsum from './components/AddIpsum.vue';

export default {
  // data() {
  //   return {
  //     ipsums: ipsumApi.getIpsums(),
  //     filter: {
  //       weight: 0,

  //     }
  //   }

  // }
};

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
