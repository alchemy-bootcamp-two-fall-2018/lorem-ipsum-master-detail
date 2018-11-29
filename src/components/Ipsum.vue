<template>
    <div>
        <IpsumDetail :ipsum="ipsum" 
                    :onEdit="handleEdit"
                    v-if="detail"/>
        <IpsumForm v-if="edit"
                    :onUpdate="onUpdate"
                    :onCancel="handleCancel"/>
    </div>
</template>

<script>

import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm';

export default {
    data() {
        return {
            edit: false,
            detail: true
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
            this.detail = false;
            this.edit = true;
        },
        handleCancel() {
            this.detail = true;
            this.edit = false;
        }
    }
};
</script>

<style>

</style>
