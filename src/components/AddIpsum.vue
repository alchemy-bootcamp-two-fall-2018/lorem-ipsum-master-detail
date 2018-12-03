<template>
    <section>
        <div v-if="!show">
            <button @click="show = true">ADD A NEW IPSUM</button>
        </div>
        <div v-else>
        <IpsumForm
            :onAdd="handleAdd"
            :onCancel="() => show = false"/>
        </div>
    </section>
</template>

<script>
import IpsumForm from './IpsumForm';
export default {
    data() {
        return {
            show: false
        };
    },
    components: {
        IpsumForm
    },
    props: {
        onAdd: Function
    }, 
    methods: {
        handleAdd(ipsum) {
            this.show = false;
            this.onAdd(ipsum);
        }
    }

};
</script>

<style>

</style>
