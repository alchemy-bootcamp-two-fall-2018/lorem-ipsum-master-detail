<template>
  <div id="app">
    <Header/>
    <ipsums-list
    v-bind:Ipsums="data"/>
  </div>
</template>

<script>
import dataApi from '../dataApi.js';
import Header from './components/Header.vue';
import IpsumsList from './components/Ipsums.vue';


export default {
    data() {
        return {
            data: dataApi.getData(),
        };
    },

    components: {
        Header,
        IpsumsList
    }
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
