<template>
  <ul>
    <Ipsum v-for="ipsum in ipsums"
      @click.native="onSelect(ipsum)"
      :key="ipsum.name"
      :ipsum="ipsum"/>
  </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';
export default {
  props: {
    animals: Array,
    onSelect: Function
  },
  components: {
    Ipsum
  }
};
</script>

<style scoped lang="postcss">
@import '../styles.css';
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($card-size, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  overflow-y: auto;
}
</style>