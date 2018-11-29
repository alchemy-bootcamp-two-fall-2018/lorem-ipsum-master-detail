<template>
    <ul>
        <IpsumItem v-for="ipsum in ipsumdata"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum"
        @click.native="onSelect(ipsum)"/>
    </ul>
</template>

<script>
import IpsumItem from './IpsumItem.vue';

export default {
  components: {
    IpsumItem
  },
  props: {
    ipsumdata: Array,
    onSelect: Function
  }    
};
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
