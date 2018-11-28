<template>
  <div id="app">
    <Header/>
    <ipsums-list/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import IpsumsList from './components/Ipsums.vue';


export default {

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
