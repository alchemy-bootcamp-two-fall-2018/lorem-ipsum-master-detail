<template>
    <li>
      <IpsumDetail
        :ipsum="ipsum"/> 
    </li>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';

export default {
    props: {
            ipsum: Object
        },
        components: {
            IpsumDetail
        }
    };
</script>

<style>

</style>
