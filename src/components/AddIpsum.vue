<template>
    <section>
        <div v-if="!show">
            <button @click="show = true">Add Ipsum</button>
        </div>
        <div v-else>
            <h2>Add a new Ipsum</h2>
            <IpsumForm
                :onAdd="handleAdd"/>
        </div>
    </section>
</template>

<script>
import IpsumForm from './IpsumForm.vue';

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
section {
    margin:10px 100px;
    padding:5px;
}
h2 {
    background-color:white;
}
</style>
