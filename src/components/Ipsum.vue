<template>

         <IpsumDetail
        :selected="selected"
        />

</template>

<script>

import IpsumDetail from './IpsumsDetail.vue';
export default {

    props: {
        selected: Object
    },
    components: {
        IpsumDetail
    },
};
</script>

<style>

</style>
