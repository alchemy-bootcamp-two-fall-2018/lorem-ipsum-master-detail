<template>
  <div id="app">
    <Header/>
    <Ipsums
    :ipsums="ipsums"
    :onSelect="handleSelect"
    />
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
  },
  data() {
    return {
      ipsums: ipsumApi.getAll()
    }
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
}
</script>

<style>

</style>
