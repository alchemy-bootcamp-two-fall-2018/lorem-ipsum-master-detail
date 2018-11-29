<template>
    <div id="ipsum-container">
        <IpsumDetail
        :ipsum="ipsum"
        />
        <IpsumForm
        :ipsum="ipsum"
        />
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
    props: {
        ipsum: Object
    },
    components: {
        IpsumDetail,
        IpsumForm
    }
}
</script>

<style>

</style>
