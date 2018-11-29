<template>
    <div id="ipsum-container">
        <IpsumDetail
        :ipsum="ipsum"
        />
        
    </div>
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
}
</script>

<style>

</style>
