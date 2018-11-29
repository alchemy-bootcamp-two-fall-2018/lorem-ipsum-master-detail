<template>
  <div id="app">
    <Header/>
    <Ipsums :ipsums="ipsums"
    :onSelect="handleSelect"/> 
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums  from './components/Ipsums.vue';

export default {
  components: {
    Ipsums,
    Header
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
