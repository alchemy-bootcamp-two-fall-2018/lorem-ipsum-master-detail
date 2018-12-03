<template>
  <div id="app">
    <Header/>
    <AddIpsum
      :onAdd="handleAdd"/>
    <Ipsums
      :ipsums="ipsums"/>
    <IpsumDetail
      :ipsum="selected"
      :onEdit="handleEdit"/>
  </div>
</template>

<script>
import ipsumApi from './services/ipsumApi.js';
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';
import IpsumDetail from './components/IpsumDetail.vue';
import AddIpsum from './components/AddIpsum.vue';

export default {
  data() {
    return {
      ipsums: ipsumApi.getIpsums(),
    };
  },
  components: {
    Header,
    Ipsums,
    IpsumDetail,
    AddIpsum
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    },
    handleAdd(ipsum) {
      this.ipsums.push(ipsum);
      this.handleSelect(ipsum);
    },
    handleEdit(old, ipsum) {
      const index = this.ipsums.indexOf(old);
      this.ipsums.splice(index, 1, ipsum);
      this.handleSelect(ipsum);
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
