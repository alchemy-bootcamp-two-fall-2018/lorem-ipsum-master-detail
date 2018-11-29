<template>
    <div>
        <form @sumbit.prevent="onAdd(ipsum)">
            <label> Title:
                <input v-model="ipsum.title">
            </label>
            <label> Author:
                <input v-model="ipsum.author">
            </label>
        <button type="button" @click.prevent="onAdd"> Add </button>
        <button type="button" @click="onCancel">Cancel</button>

        </form>
        
    </div>
</template>

<script>
export default {
    data() {
        const update = this.ipsumToUpdate || {};
        return {
            ipsum: {
                title: update.title || '',
                author: update.author || '',

            }
        };
    },
    props: {
        onAdd: Function, 
        onCancel: Function,
        ipsumToUpdate: Object
    }

};
</script>

<style>

</style>
