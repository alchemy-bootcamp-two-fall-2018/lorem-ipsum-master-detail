<template>
  <div id="app">
    <Header/>
    <AddIpsum 
      :onAdd="handleAdd"/>
    <IpsumDetails 
      :ipsum="selected"/>
    <Ipsums
        :ipsums="ipsums"
        :onSelect="handleSelect"/>
  </div>
</template>

<script>
import ipsumApi from './services/ipsumApi';
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';
import IpsumDetails from './components/IpsumDetails.vue';
import AddIpsum from './components/AddIpsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumApi.getIpsums(),
            selected: null,
        };
    },
    components: {
        Header,
        Ipsums,
        IpsumDetails,
        AddIpsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
        },
        handleAdd(ipsum) {
            this.ipsums.push(ipsum);
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
