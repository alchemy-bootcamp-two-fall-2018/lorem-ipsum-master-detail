<template>
    <div>
    <IpsumList :ipsums="ipsums" 
      :onSelect="handleSelect"/>
    <Ipsum :ipsum="selected"/>
    </div>
</template>

<script>
import IpsumList from './components/IpsumList.vue';
import ipsumApi from '../ipsumApi.js';
import Ipsum from './components/Ipsum';

export default {
  data() {
    return {
      ipsums: ipsumApi.getIpsums(),
      selected: null
    };
  },

  components: {
    IpsumList,
    Ipsum
  },

  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
};
</script>

<style>

</style>
