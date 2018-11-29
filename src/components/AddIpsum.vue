<template>
    <section>
        <div v-if="!show">
            <button @click="show = true">Add a Ipsum!</button>
        </div>
        <div v-else>
            <h3>
                Add a new Ipsum
            </h3>
            <IpsumForm
            :onadd="handleAdd"/>
        </div>
    </section>
</template>

<script>
import IpsumForm from './AddForm.vue';
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
        IpsumType: Array,
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
