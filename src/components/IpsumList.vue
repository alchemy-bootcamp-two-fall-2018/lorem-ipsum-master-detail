<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
        :key="ipsum.title"
        :ipsum="ipsum"/>
    </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';

export default {
  props: {
    ipsums: Array
  },
  components: {
    Ipsum
  }
};
</script>

<style>

</style>
