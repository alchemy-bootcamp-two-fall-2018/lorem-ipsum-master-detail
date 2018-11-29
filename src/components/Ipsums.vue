<template>
    <div>
        <IpsumList 
        :ipsumdata="ipsumdata"
        :onSelect="handleSelect"
        />
        <Ipsum
        :ipsum="selected"/>
    </div>
</template>

<script>
// import Ipsum from './Ipsum.vue';
import Ipsum from './Ipsum.vue';
import IpsumList from './IpsumList.vue';
import ipsumApi from '../ipsumApi.js';

export default {
  data() {
    return {
      ipsumdata: ipsumApi.getAll(),
      selected: null
    };
  },
  components:{
    // Ipsum
    IpsumList,
    Ipsum
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
      console.log(ipsum);
    }
  }      
};
</script>

<style>

</style>
