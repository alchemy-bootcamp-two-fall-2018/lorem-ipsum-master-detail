<template>
    <section>
 
    </section>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    components: {
       
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
