<template>
    <div v-if="ipsum">
        <IpsumDetail 
            v-bind:ipsum="ipsum"/>
    </div>
    <div v-else>
        <h1>Select a Lorem Ipsum to Read More</h1>
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
    props: {
        ipsum: Object,
    },
    components: {
        IpsumDetail,
        IpsumForm
    },
};

</script>

<style>

</style>
