<template>
    <section>
        <IpsumViewer
            v-if="!edit"
            :ipsum="ipsum" />
    </section>
</template>

<script>
import IpsumViewer from './IpsumViewer.vue';

export default {
    data() {
        return {
            edit: false
        };
    },
    props: {
        ipsum: Object
    },
    components: {
        IpsumViewer
    }
};
</script>

<style>

</style>
