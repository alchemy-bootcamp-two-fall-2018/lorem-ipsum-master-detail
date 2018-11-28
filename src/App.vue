<template>
  <div id="app">
    <Header />
    <IpsumList :ipsums="ipsums"/>
  </div>
</template>

<script>
import data from '../data.js';
import Header from './components/Header.vue';
import IpsumList from './components/IpsumList.vue';

export default {
  name: 'app',

  data() {
    return {
      ipsums: data.getIpsums()
    };
  },

  components: {
    Header,
    IpsumList
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
