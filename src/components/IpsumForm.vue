<template>
        <form>
             <label>
                <span>Title:</span>
                <input type="text" v-model="ipsum.title">
            </label>
        </form>
</template>

<script>
export default {
    data() {
        const update = this.ipsum;
        return {

            update
        };
        
    },
    props: {
        ipsum: Object
    }
};
</script>

<style>
form {
    border: 2px solid navy;
}

</style>
