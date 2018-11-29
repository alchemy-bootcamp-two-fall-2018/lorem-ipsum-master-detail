<template>
  <div id="app">
    <Header 
    />
    <Ipsums  
    
    />
  </div>
</template>

<script>
import Ipsums from './components/Ipsums';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
    Ipsums
    
  }
  
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
