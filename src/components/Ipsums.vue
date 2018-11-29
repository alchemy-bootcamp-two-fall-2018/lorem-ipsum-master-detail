<template>
    <div>
        <Ipsum v-if="selected"
        :ipsum="selected"/>

        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"/>

        <AddIpsum
        :onAdd="handleAdd"/>

        <!-- :ipsumCategories="ipsumCategories"/> -->
    </div>
</template>

<script>
import ipsumsApi from '../../data.js';
import Ipsum from './Ipsum.vue';
import IpsumList from './IpsumList.vue';
import AddIpsum from './AddIpsum.vue';

export default {
    data() {
        return {
            ipsums: ipsumsApi.getIpsums(),
            selected: null
    };
  },
    components: {
    Ipsum,
    IpsumList,
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

</style>
