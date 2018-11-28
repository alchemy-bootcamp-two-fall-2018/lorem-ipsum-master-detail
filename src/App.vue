<template>
  <div id="app">
    <Header />
    <IpsumList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import IpsumList from './components/IpsumList.vue'

export default {
  name: 'app',
  components: {
    Header,
    IpsumList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
