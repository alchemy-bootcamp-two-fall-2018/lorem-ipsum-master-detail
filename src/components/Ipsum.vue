<template>
    <IpsumDetail :ipsum="ipsum" />
</template>

<script>

import IpsumDetail from './IpsumDetail.vue';

export default {
    props: {
        ipsum: Object
    },
    components: {
        IpsumDetail,
    }
};
</script>

<style>

</style>
