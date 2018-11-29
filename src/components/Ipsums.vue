<template>
    <ul>
       <Ipsum v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum"/> 
    </ul>
</template>

<script>
import ipsumsApi from './services/ipsumsApi';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
    };
  }
};
</script>

<style>

</style>
