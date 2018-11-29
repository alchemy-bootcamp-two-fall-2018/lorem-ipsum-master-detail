<template>
    <div>
        <form @sumbit.prevent="onAdd(ipsum)">
            <label> Title:
                <input v-model="ipsum.title">
            </label>
        <button type="submit">{{ IpsumToUpdate ? 'Update' : 'Add'}}</button>
        <button type="button" @click="onCancel">Cancel</button>

        </form>
        
    </div>
</template>

<script>
export default {
    data() {
        const update = this.ipsumToUpdate || {};
        return {
            ipsum: {
                title: update.title || '',
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

</style>
