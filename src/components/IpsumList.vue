<template>
     <ul>
        <Ipsum v-for="ipsum in ipsums"
            @click.native="onSelect(ipsum)"
            :key="ipsum.name"
            :ipsum="ipsum"
            />
    

    </ul>
</template>

<script>
import Ipsum from './Ipsum';
export default {
  props: {
    ipsums: Array,
    onSelect: Function
  },

  components: {

    Ipsum
  }

};


</script>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
