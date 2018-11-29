<template>
  <div id="app">

    <Header/>

    <Ipsums/>

  </div>
</template>


<script>
import Ipsums from './components/Ipsums'; 
import Header from './components/Header'; 

export default {
  components: {
    Header,
    Ipsums
  }, 
}; 
</script>

<style>
body {
  background-image: url('http://kesieuthi.top/wp-content/uploads/2018/07/modern-minimalist-art-minimalist-large-print-modern-wall-art-mountains-by-modern-minimalist-art-for-sale.jpg'); 
  background-repeat: no-repeat;
  background-size: cover; 
  margin: 0; 
}
</style>
