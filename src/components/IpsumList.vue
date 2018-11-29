<template>
    <ul>
        <IpsumItem  v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum"/>
    </ul>
</template>

<script>
import IpsumItem from './IpsumItem';
// import Ipsum from './Ipsum';

export default {
    props: {
        ipsums: Array
    },

    components: {
        IpsumItem,
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
