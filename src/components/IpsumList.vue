<template>
    <ul>
        <IpsumItem v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        :key="ipsum.title"
        :ipsum="ipsum"/>
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

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    padding: 10px;
    margin: 10px;
}
</style>
