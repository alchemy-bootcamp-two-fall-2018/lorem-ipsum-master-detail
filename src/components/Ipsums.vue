<template>
    <div>
        <h2>
            Add component will be here. 
        </h2>
        <IpsumsList
        :Ipsums="data"
        :onSelect="handleSelect"
        :selected="selected"/> 
        <Ipsum
        :selected="selected"
        />
        <AddForm :onAdd="handleAdd"/>
    </div>

</template>

<script>

import IpsumsList from './IpsumsList.vue';
import dataApi from '../../dataApi.js';
import Ipsum from './Ipsum.vue';
import AddForm from './AddForm.vue';

export default {
    data() {
        return {
            data: dataApi.getData(),
            selected: null
        };
    },
   
    components: {
        IpsumsList,
        Ipsum,
        AddForm
    
    },

    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum === this.selected ? null : ipsum;
            console.log('you have selected', ipsum);

        },
        handleAdd(ipsum) {
            dataApi.addIpsum(ipsum);
            this.data = dataApi.getData();
            console.log('you have added', ipsum);
        }, 
    },

};

</script>

<style>

</style>
