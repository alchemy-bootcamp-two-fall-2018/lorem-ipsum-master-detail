<template>
    <section>
        <h3>
            Add Ipsum form goes here.
        
        </h3>
        <IpsumForm/>
    </section>
</template>

<script>
import IpsumForm from './IpsumForm';
export default {
    components: {
        IpsumForm
    },
    props: {
        ipsum: Object
    } 

};
</script>

<style>

</style>
