<template>
    <div>
        <IpsumItem v-if="selected"
        :ipsum="selected"/>

        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"/>

        <AddIpsum
        :onAdd="handleAdd"
        :ipsumTypes="ipsumTypes"/>

    </div>
</template>

<script>
import ipsumsApi from '../../data.js';
import IpsumItem from './IpsumItem.vue';
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
    IpsumItem,
    IpsumList,
    AddIpsum
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    },
    handleAdd(ipsum) {
        this.ipsums.push(ipsum);
    }
  }
};
    
</script>

<style>

</style>
