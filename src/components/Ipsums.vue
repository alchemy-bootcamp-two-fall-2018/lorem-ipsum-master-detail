
<template>
  <div>
    <IpsumDetail
     :ipsum="selected"/>
    <ul>
        <IpsumList
        :onSelect="handleSelect"
        :ipsums="ipsums"/>
    </ul>
  </div>
</template>

<script>
import ipsumsApi from '../services/IpsumApi.js';
import IpsumDetail from './IpsumDetail.vue';
import IpsumList from './IpsumList.vue';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getAll(),
      selected: null
    };
  },
  components:{
    IpsumDetail,
    IpsumList 
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