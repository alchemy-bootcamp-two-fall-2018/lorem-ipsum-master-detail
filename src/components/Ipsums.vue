<template>
    <div>
        <Ipsum v-if="selected"
        :ipsum="selected"/>

        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"/>

    </div>
</template>

<script>
import ipsumsApi from '../../data.js';
import Ipsum from './Ipsum.vue';
import IpsumList from './IpsumList.vue';

export default {
    data() {
        return {
            ipsums: ipsumsApi.getIpsums(),
            selected: null
    };
  },
    components: {
    Ipsum,
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
