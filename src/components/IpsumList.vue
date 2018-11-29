<template>
  <ul>
    <IpsumItem v-for="ipsum in data"
      @click.native="onSelect(ipsum)"
      :key="ipsum.title"
      :animal="ipsum" />
  </ul>
</template>

<script>
import IpsumItem from './IpsumItem.vue';

export default {
  props: {
    data: Array
  },
  components: {
    IpsumItem
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
