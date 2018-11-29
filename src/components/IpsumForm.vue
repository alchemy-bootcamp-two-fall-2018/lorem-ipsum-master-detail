<template>
        <form>
             <label>
                Title:
                <input v-model="ipsum.title">
            </label>
        </form>
</template>

<script>
export default {
    
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
