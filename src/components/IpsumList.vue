<template>
   
    <ul>
        <IpsumItem v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum"/>  
    </ul>
    
</template>

<script>
import IpsumItem from './IpsumItem.vue';

export default {
  data() {
    return {
    };
  },
  //child, who you'll be sending info to
  components:{
    IpsumItem,
        

  },
  //parent, what's coming in to be used 
  props: {
    ipsums: Array,
    onSelect: Function,


  }
    


};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5px;
    border: solid black;
    list-style-type: none;

}

</style>
