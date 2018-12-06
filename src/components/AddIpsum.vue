<template>
    <section>
        <div v-if="!show">
            <p>Click and Make an Ipsum!</p>
            <button @click="show = true">Add Ipsum</button>
        </div>
        <div v-else>
            <h3>Ready to add an Ipsum?</h3>
            <IpsumForm :onAdd="handleAdd"/>
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
