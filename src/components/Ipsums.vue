<template>
    <div>
        Ipsums Component
    <!-- <Ipsum v-for="ipsum in ipsums"
      v-bind:key="ipsum.title"
      v-bind:ipsum="ipsum"/> -->
      <ipsumApi/>
  </div>
</template>

<script>
import ipsumApi from '../ipsumApi.js';
export default {
    components: {
        ipsumApi,
    }
};
</script>


<style>

</style>


// owns the "ipsum list" state (data, use your ipsumApi service)
// adds and updates need to be done in this component!
// owns the "selected" state (initially null)
// passes IpsumList list of ipsums and a callback function, onSelect
// passes AddIpsum a callback function onAdd
// passes Ipsum the ipsum (it's selected data) and an onUpdate callback