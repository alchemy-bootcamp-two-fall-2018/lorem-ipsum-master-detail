<template>

 
    <div v-if="selected">

        <IpsumForm
        :onAdd="handleAdd"/>

        <h2>
        {{selected.title}}
        </h2>
        <h3>
        {{selected.author}}
        </h3> 
         <h3>
        {{selected.category}}
        </h3> 
        <img v-bind:src="selected.authorUrl" alt="">  
    </div>
    <div v-else> 
        Click on something(Bob Ross or die)

    </div>
</template>

<script>
import IpsumForm from './AddForm.vue';
export default {
    props: {
        selected: Object
    },
    components: {
        IpsumForm
    }

};
</script>

<style>

</style>
