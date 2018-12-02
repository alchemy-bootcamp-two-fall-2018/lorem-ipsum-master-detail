<template>
    <section>
        <IpsumDetail v-bind:ipsum="ipsum"/>
    </section>
</template>

<script>
import IpsumDetail from './IpsumDetail';

export default {
    date() {
        return {
            show: false
        };
    },

    props: {
        ipsum: Object,
        onAdd: Function        
    },

    components: {
        IpsumDetail
    }
};

</script>

<style>

</style>

// need to add to components in IpsumList.vue if info goes there
