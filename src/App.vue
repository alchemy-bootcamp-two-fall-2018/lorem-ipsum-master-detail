<template>
  <div id="app">
    <Header />
    <IpsumList :ipsums="ipsums" 
      :onSelect="handleSelect"/>
    <Ipsum :ipsum="selected"/>
  </div>
</template>

<script>
import ipsumApi from '../ipsumApi.js';
import Header from './components/Header.vue';
import IpsumList from './components/IpsumList.vue';
import Ipsum from './components/Ipsum';

export default {
  name: 'app',

  data() {
    return {
      ipsums: ipsumApi.getIpsums(),
      selected: null
    };
  },

  components: {
    Header,
    IpsumList,
    Ipsum
  },

  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
