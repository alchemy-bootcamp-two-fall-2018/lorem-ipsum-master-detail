
<template>
  <div>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum"/>
    </ul>
  </div>
</template>

<script>
import Ipsum from './Ipsum.vue';

export default {
  data() {
    return {
      selected: null
    };
  },
  props: {
    onSelect: Function,
    ipsums: Array
  },
  components:{
    Ipsum    
  },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    }
  }
};

</script>

<style>
</style>