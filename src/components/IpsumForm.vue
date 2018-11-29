<template>
    <form @submit.prevent="onAdd(ipsum)">
        <label>
            <span>Title:</span>
            <input v-model="ipsum.title" required>
        </label>
        <label>
            <span>Category:</span>
            <select v-model="ipsum.category" required>
                <option value="" disabled>Select a Category</option>
                <option 
                v-for="category in ipsumCategories" 
                v-bind:key="category"
                v-bind:value="category">
                {{category}}
                </option>
            </select>
        </label>
        <label>
            <span>Published Date:</span>
            <input type="date" v-model="ipsum.publishedOn" required>
        </label>
        <label>
            <span></span>
            <button type="submit">{{ ipsumToUpdate ? 'Update':'Add'}}</button>
        </label>
    </form>
</template>

<script>
export default {
    data() {
        const update = this.ipsumToUpdate || {};
        return {
            ipsum: {
                title: update.title || '',
                category: update.category || '',
                publishedOn: update.publishedOn || ''
            }
        };
    },
    props: {
        onAdd: Function,
        ipsumToUpdate: Object,
        ipsumCategories: Array
    }
};
</script>

<style>
label {
    background-color:white;
    padding:5px;
}
input {
    border: solid 0.4px;
}

</style>
