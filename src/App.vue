<template>
  <div id="app">
    <Header 
    />
    <Ipsums  
    v-bind:ipsums="ipsums"
    />
  </div>
</template>

<script>
import ipsumApi from './services/ipsumApi';
import Ipsums from './components/Ipsums';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
    Ipsums
    
  },
  data() {
    return {
      ipsums: ipsumApi.getData(),
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

</style>
