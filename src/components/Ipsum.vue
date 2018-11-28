<template>
    <div id="ipsum-container">
        <h3>Ipsum</h3>
        <IpsumDetail/>
        <IpsumForm/>
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
    components: {
        IpsumDetail,
        IpsumForm
    }
}
</script>

<style>

</style>
