<template>
  <ul>
    <IpsumItem v-for="ipsum in ipsums"
      @click.native="onSelect(ipsum)"
      :key="ipsum.title"
      :ipsum="ipsum"


    />
  </ul>    
</template>

<script>
import IpsumItem from './IpsumItem.vue';


export default {
    props: {
        ipsums: Array,
        onSelect: Function
    },
    components: {
        IpsumItem
    }
};
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>
