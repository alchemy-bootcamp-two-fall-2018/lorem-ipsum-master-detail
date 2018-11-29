<template>
    <ul>
        <IpsumItem
        v-for="ipsum in ipsums"
        @="onSelect"
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
        list-style-type: none;
    }
</style>


