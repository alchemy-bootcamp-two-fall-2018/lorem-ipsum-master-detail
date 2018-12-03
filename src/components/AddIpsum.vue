<template>
    <section>
        <h3>
            Add Ipsum form goes here.
        
        </h3>
        <IpsumForm
            :onAdd="handleAdd"/>
    </section>
</template>

<script>
import IpsumForm from './IpsumForm';
export default {
    components: {
        IpsumForm
    },
    props: {
        ipsum: Object,
        onAdd: Function
    }, 
    methods: {
        handleAdd(ipsum) {
            console.log(ipsum);
            this.onAdd(ipsum);
        }
    }

};
</script>

<style>

</style>
