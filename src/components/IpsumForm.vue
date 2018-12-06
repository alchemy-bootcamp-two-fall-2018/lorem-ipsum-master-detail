<template>
    <form @submit.prevent="onAdd(ipsum)">
        <label>
            <span>Title:</span>
            <input v-model="ipsum.title" required>
        </label>
        <label>
            <span>Category </span>
            <input v-model="ipsum.category">
        </label>
        <label>
            <span>Published Date:</span>
            <input type="date" v-model="ipsum.publishedOn" required>
        </label>
        <label>
            <span></span>
            <textarea v-model.trim="ipsum.body" required></textarea>
        </label>
        <label>
            <span></span>
            <button type="submit">Submit</button>
        </label>
    </form>
</template>

<script>
export default {
    data() {
        return {
            ipsum: {
                title:'',
                category:'',
                publishedOn:'',
                body:''
            }
        };
    },
    props: {
        onAdd: Function
    }
};
</script>

<style>
label {
    display:flex;
    background-color:white;
    padding:10px;
}
input {
    border: solid 0.4px;
}

</style>
