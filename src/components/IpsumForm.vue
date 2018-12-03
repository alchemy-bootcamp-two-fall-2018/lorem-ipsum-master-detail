<template>
        <form @submit.prevent="onAdd(ipsum)">
            <label>
                <span>Title:</span>
                <input v-model="ipsum.title" required>
            </label>
             <label>
                <span>Author:</span>
                <input v-model="ipsum.author" required>
            </label>
             <label>
                <span>Category:</span>
                <input v-model="ipsum.category" required>
            </label>
             <label>
                <span>Body:</span>
                <input v-model="ipsum.body" required >
            </label>
            <label>
                <button type="submit">Add</button>
                <button type="reset">Cancel</button>
            </label>
        </form>
</template>

<script>
// import ipsumApi from '../assests/ipsumApi';
export default {
    data() {
        return {
            ipsum: {
                title: '',
                author: '',
                category: '',
                body: ''
            }
        };
    },
    props: {
        onAdd: Function,
        onCancel: Function
    }
};
</script>

<style>
form {
    border: 2px solid navy;
}

</style>
