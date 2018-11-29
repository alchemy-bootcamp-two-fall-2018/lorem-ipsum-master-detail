<template>
  <div id="app">
    <img src="./assets/logo.png" style="height:50px"/>
    <Header />
    <Ipsums />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';

export default {
    components: {
        Header,
        Ipsums
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
