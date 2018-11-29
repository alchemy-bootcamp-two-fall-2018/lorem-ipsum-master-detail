<template>
    <!-- <h1>Pick your Ipsum!</h1> -->
    <IpsumList
        :ipsums="ipsums"
    />
       
   
</template>

<script>
import ipsums from '../../data.js';
import IpsumList from './IpsumList';

export default {
    data() {
        return {
            ipsums
        };
    },

    components: {
        IpsumList
    }
};
</script>

<style>

</style>
