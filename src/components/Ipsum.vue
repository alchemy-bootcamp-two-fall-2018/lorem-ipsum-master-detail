<template>
    <div>
        <IpsumDetail :ipsum="ipsum" 
                    :onEdit="handleEdit"/>
        <IpsumForm v-if="edit"
                    :onUpdate="onUpdate"
                    :onCancel="onCancel"/>
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
        onEdit: Function,
        onUpdate: Function,
    },
    components: {
        IpsumDetail,
        IpsumForm
    },
    methods: {
        handleEdit() {
            this.edit = true;
        },
        onCancel() {
            this.edit = false;
        }
    }
};
</script>

<style>

</style>
