<template>
    <div>
        <h1>HI</h1>
        <IpsumDetail 
            v-bind:ipsum="ipsum"/>
         <!-- v-bind:key="ipsum.title" -->

        
   </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';


export default {
    props: {
        ipsum: Object,
    },
    components: {
        IpsumDetail
    },
};

</script>

<style>

</style>
