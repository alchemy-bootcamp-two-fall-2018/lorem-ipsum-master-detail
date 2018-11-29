<template>
    <ul>
        Ipsum v-for="ipsum in ipsums"
        @click.native="onSelect(animal)"
        :key="ipsum.name"
        :ipsum="ipsum/>"
        <!-- why ipsim/>, why :ipsum= -->
    </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';
export default {
  props: {
    ipsums: Array,
    onSelecr: Function
  },
  components: {
    Ipsum
  }
};
</script>

<style>

</style>
