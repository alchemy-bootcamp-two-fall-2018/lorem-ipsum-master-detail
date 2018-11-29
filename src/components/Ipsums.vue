<template>
    <div>
        <h2>
            Add component will be here. 
        </h2>
        <IpsumsList
        :Ipsums="data"
        :onSelect="handleSelect"/> 


        <Ipsum
        :selected="selected"
        />

    </div>

</template>

<script>

import IpsumsList from './IpsumsList.vue';
import dataApi from '../../dataApi.js';
import Ipsum from './Ipsum.vue';

export default {
    data() {
        return {
            data: dataApi.getData(),
            selected: null
        };
    },
   
    components: {
        IpsumsList,
        Ipsum
    },

    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
            console.log('you have selected', ipsum);

        },
        handleAdd(ipsumData) {
            this.Ipsum.push(ipsumData);
            this.handleSelect(ipsumData);
            console.log('you have added', ipsumData);
        }
    },

};

</script>

<style>

</style>
