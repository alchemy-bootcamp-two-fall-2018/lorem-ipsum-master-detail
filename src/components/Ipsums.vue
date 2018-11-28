<template>
    <div>
        <h2>
        Be a place for the list to render and a place to render the add from    
        Level 2         
        </h2>
        <IpsumsList
        :Ipsums="Ipsums"/> this is the list component 
    </div>
</template>

<script>

import IpsumsList from './IpsumsList.vue';
export default {

    props: {
        Ipsums: Array
    },
   
    components: {
        IpsumsList
    },

};

</script>

<style>

</style>
