<template>
    <section>
        <h3>Update Info</h3>
            <label>
                <span>Title:</span>
                <input v-model="updateIpsum.title" required>
            </label>
            <label>
                <span>Author:</span>
                <input v-model="updateIpsum.author" required>
            </label>
            <label>
                <span>Category:</span>
                <input v-model="updateIpsum.category" required>
            </label>
            <label>
                <span>Author URL:</span>
                <input v-model="updateIpsum.authorUrl" required>
            </label>
            <label>
                <span>Published On:</span>
                <input v-model="updateIpsum.publishedOn" required>
            </label>
            <label>
                <span>Description:</span>
                <input type="textarea" v-model="updateIpsum.body" required>
            </label>
            <button @click="onUpdate(updateIpsum)">Update</button>
            <button @click="onCancel()">Cancel</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            updateIpsum: {}
        };
    },
    props: {
        onUpdate: Function,
        onCancel: Function
    }
};
</script>

<style>

</style>
