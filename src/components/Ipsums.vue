<template>
    <div>
        <IpsumList v-bind:ipsums="ipsums"/>
    </div>


</template>

<script>
import ipsumsApi from '../ipsumsApi.js';
import IpsumList from './IpsumList.vue';

export default {
    data() {
        return {
            ipsums: ipsumsApi.getAll() 
    }
  },
    //passing down to child
    components: {
        IpsumList,
    }

}
</script>

<style>

</style>
