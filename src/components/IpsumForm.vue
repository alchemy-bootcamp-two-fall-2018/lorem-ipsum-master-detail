<template>
        <form @submit.prevent="onAdd(ipsum)">
             <label>
                <span>Title:</span>
                <input v-model="ipsum.title">
            </label>
            <label>
            </label>
        </form>
</template>

<script>
export default {
    data() {
        const update = this.ipsumToUpdate || {};
        return {
            ipsum: {
                title: ''
            }

        };
        
    },
    props: {
        ipsumToUpdate: Object,
        onAdd: Function
    }
};
</script>

<style>
form {
    border: 2px solid navy;
}

</style>
