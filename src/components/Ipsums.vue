<template>
    <div>
        <h2>
            Add component will be here. 
        </h2>
        <IpsumsList
        :Ipsums="data"
        :onSelect="handleSelect"/> 


        <IpsumDetail
        :selected="selected"
        />

    </div>

</template>

<script>

import IpsumsList from './IpsumsList.vue';
import dataApi from '../../dataApi.js';
import IpsumDetail from './IpsumsDetail.vue';

export default {
    data() {
        return {
            data: dataApi.getData(),
            selected: null
        };
    },
   
    components: {
        IpsumsList,
        IpsumDetail
    },

    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
            console.log('you have selected', ipsum);

        }
    }

};

</script>

<style>

</style>
