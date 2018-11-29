<template>
    <ul>
        <IpsumItem  v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum"/>
    </ul>
</template>

<script>
import IpsumItem from './IpsumItem';

export default {
    props: {
        ipsums: Array
    },

    components: {
        IpsumItem
    }
};

</script>

<style>

</style>
