<template>
    <div>
        <IpsumDetail :ipsum="ipsum" 
                    :onEdit="handleEdit"/>
        <IpsumForm v-if="edit"/>
    </div>
</template>

<script>

import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm';

export default {
    data() {
        return {
            edit: false
        };
    },
    props: {
        ipsum: Object,
        onEdit: Function
    },
    components: {
        IpsumDetail,
        IpsumForm
    },
    methods: {
        handleEdit() {
            this.edit = true;
        }
    }
};
</script>

<style>

</style>
