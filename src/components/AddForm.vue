<template>
    <div>
        <form @submit.prevent="onAdd(data)">
            <label> Title:
                <input v-model="data.title">
            </label>
            <label> Author:
                <input v-model="data.author">
            </label>
        <button type="button" @click.prevent="onAdd(data)"> Add </button>

        </form>
        
    </div>
</template>

<script>
export default {
    data() {
        const update = this.dataToUpdate || {};
        return {
            data: {
                title: update.title || '',
                author: update.author || '',

            }
        };
    },
    props: {
        onAdd: Function, 
        dataToUpdate: Object
    }

};
</script>

<style>

</style>
