<template>
    <ul>
        <IpsumItem  v-for="ipsum in ipsums"
            @click.native="onSelect(ipsum)"
            :key="ipsum.title"
            :ipsum="ipsum"/>
    </ul>
</template>

<script>
import IpsumItem from './IpsumItem';


export default {
    props: {
        ipsums: Array,
        onSelect: Function
    },

    components: {
        IpsumItem,
        // Ipsum
    }
};

</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
