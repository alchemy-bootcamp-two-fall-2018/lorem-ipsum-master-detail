<template>
  <div id="app">
    <Header />
    <IpsumList :ipsums="ipsums"/>
    <Ipsum />
  </div>
</template>

<script>
import data from '../data.js';
import Header from './components/Header.vue';
import IpsumList from './components/IpsumList.vue';
import Ipsum from './components/Ipsum';

export default {
  name: 'app',

  data() {
    return {
      ipsums: data.getIpsums()
    };
  },

  components: {
    Header,
    IpsumList,
    Ipsum
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
