<template>
    <div>
        <h2>
            Add component will be here. 
        </h2>
        <IpsumsList
        :Ipsums="data"/>
    </div>
</template>

<script>

import IpsumsList from './IpsumsList.vue';
import dataApi from '../../dataApi.js';

export default {
    data() {
        return {
            data: dataApi.getData(),
        };
    },
   
    components: {
        IpsumsList
    },

};

</script>

<style>

</style>
