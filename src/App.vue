<template>
  <div id="app">
      <AddIpsum
        :onAdd="handleAdd" />

    <Ipsums
        :onSelect="handleSelect" />

    <IpsumDetail
        :onEdit="handleEdit"
        :ipsum="selected" />
  </div>
</template>

<script>
import Ipsums from './components/Ipsums.vue';
import ipsumApi from './services/ipsumApi';
import IpsumDetail from './components/IpsumDetail.vue';
import AddIpsum from './components/AddIpsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            selected: null
        };
    },
    components: {
        Ipsums,
        IpsumDetail,
        AddIpsum
    },
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
