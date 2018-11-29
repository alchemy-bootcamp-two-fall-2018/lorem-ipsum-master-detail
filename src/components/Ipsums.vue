<template>
    <ul>
        <Ipsum :ipsums="ipsums"
        :onSelect="handleSelect"
        v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        :key="ipsum.title"
        :ipsum="ipsum"/>
    </ul>
</template>

<script>
import ipsumsApi from '../../data.js';
import Ipsum from './Ipsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumsApi.getIpsums()
    };
  },
    components: {
    Ipsum,
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
};
    
</script>

<style>
ul {
    display: grid;
    gridp-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
