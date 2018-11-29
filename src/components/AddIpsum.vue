<template>
    <section>
        <h3>Add an Author</h3>
        <!-- <form @submit.prevent="onAdd(newIpsum)"> -->
            <label>
                <span>Title:</span>
                <input v-model="newIpsum.title" required>
            </label>
            <label>
                <span>Author:</span>
                <input v-model="newIpsum.author" required>
            </label>
            <label>
                <span>Category:</span>
                <input v-model="newIpsum.category" required>
            </label>
            <label>
                <span>Author URL:</span>
                <input v-model="newIpsum.authorUrl" required>
            </label>
            <label>
                <span>Published On:</span>
                <input v-model="newIpsum.publishedOn" required>
            </label>
            <label>
                <span>Description:</span>
                <input type="textarea" v-model="newIpsum.body" required>
            </label>
            <button @click="onAdd(newIpsum)">Add</button>
        <!-- </form> -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            newIpsum: {}
        };
    },
    props: {
        onAdd: Function,
    }
};
</script>

<style>

</style>
