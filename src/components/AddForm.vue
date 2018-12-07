<template>
    <div>
        <form @submit.prevent="onAdd(data)">
            <label> Title:
                <input v-model="data.title">
            </label>
            <label> Author:
                <input v-model="data.author">
            </label>
            <button> Add </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                title: '',
                author: ''
            }
        };
    },
    props: {
        onAdd: Function, 
    }

};
</script>

<style>

</style>
