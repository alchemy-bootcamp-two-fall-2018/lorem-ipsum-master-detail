<template>
    <section>
        <form @submit.prevent="onAdd(ipsum)">  
            <label>
                <span>Name:</span>
                <input v-model="ipsum.title" required>
            </label>

            <label>
                <span>Author:</span>
                <input v-model="ipsum.author" required>
            </label>

            <label>
                <span>Topic:</span>
                <input v-model="ipsum.category" required>
            </label>
            
            <label>
                <span>Ipsum Text:</span>
                <input v-model="ipsum.body" required>
            </label>

            <label>
                <span></span>
                <button type="submit">Add Ipsum!</button>
            </label>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            ipsum: {
                title: '',
                author: '',
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

label {
    display: inline-block;
    text-align: center;
}
</style>
