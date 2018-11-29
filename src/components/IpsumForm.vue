<template>
        <form>
             <label>
                 <span>Title:</span>
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

</style>
