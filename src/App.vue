<template>
  <div id="app">
    <Header/>
    <Ipsums/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';
import ipsumApi from '../ipsumApi.js';
export default {
  components: {
    Header,
    Ipsums,
  }
}
</script>

<style>

</style>
