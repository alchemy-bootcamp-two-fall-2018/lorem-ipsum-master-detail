<template>
   <ul>
        <Ipsum v-for="ipsum in ipsums"
            @click.native="onSelect(ipsum)"
            :key="ipsum.name"
            :ipsum="ipsum"
            />
    </ul>
   
   
   </template>

<script>
import ipsumApi from '../services/ipsumApi';
import Ipsum from './Ipsum.vue';

export default {
  data() {
    return {
      ipsums: ipsumApi.getData(),
      selected: null,
    };
  },
  methods: {
    handleSelect(ipsum) {
      this.selected(ipsum);
      console.log(this.selected(ipsum));
    }
  },
  components: {
    Ipsum
  }
};
</script>

<style scoped>


</style>
    