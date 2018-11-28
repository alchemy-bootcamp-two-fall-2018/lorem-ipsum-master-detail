<template>
        <ul>
            <IpsumItem
                v-for="ipsum in ipsums"
                v-bind:key="ipsum.name"
                v-bind:ipsum="ipsum"/>
        </ul>
</template>

<script>
import IpsumItem from './IpsumItem.vue';
export default {
    props: {
        ipsums: Array
    },
    components: {
        IpsumItem
    }
};

</script>

<style scoped>

</style>
