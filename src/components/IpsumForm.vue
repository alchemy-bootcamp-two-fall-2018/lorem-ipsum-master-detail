<template>
        <form @submit="onAdd(ipsum)">
             <label>
                <span>Title:</span>
                <input v-model="ipsum.title">
            </label>
            <label>
                <button type="submit">Add</button>
                <button type="button" @click="onCancel">Cancel</button>
            </label>
        </form>
</template>

<script>
export default {
    data() {
        const update = this.ipsumToUpdate || {};
        return {
            ipsum: {
                title:  update.title || ''
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
form {
    border: 2px solid navy;
}

</style>
