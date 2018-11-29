
<template>
    <!-- <div>
        <IpsumList v-bind:ipsums="ipsums"/>
    </div> -->

    <ul>
    <Ipsum v-for="ipsum in ipsums"
    :key="ipsum.title"
    :ipsum="ipsum"/>
    </ul>

</template>

<script>
import ipsumsApi from '../services/IpsumApi.js';
import Ipsum from './Ipsum';

export default {
  data() {
    return {
      ipsums: ipsumsApi.getAll()
    };
  },
  components: {
    Ipsum
  }
};
</script>


<style>

</style>
