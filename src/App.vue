<template>
  <div id="app">
    <Header/>
    <Ipsums
    :ipsums="ipsums"
    onSelect="handleSelect" />
    <IpsumDetail
    ipsum="selected" />
  </div>
</template>

<script>
import Ipsums from './components/Ipsums';
import Header from './components/Header';
import ipsumApi from './services/ipsumApi';
import IpsumDetail from './components/IpsumDetail';

export default {
  data() {
    return {
      ipsums: ipsumApi.getData(),
      selected: null,
    };
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  },
  components: {
    Header,
    Ipsums,
    IpsumDetail
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
