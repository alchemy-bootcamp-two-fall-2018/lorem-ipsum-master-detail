<template>
    <div v-if="add">
        <IpsumForm/>
    </div>
    <div v-else>
        <button @click="add=true" >Add an Ipsum!</button> 
        <IpsumDetail
        :ipsum="ipsum"/>   
    </div>
    
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
  data() {
    return {
      add: false
    };
  },
  components: {
    IpsumDetail,
    IpsumForm
  },
  props: {
    ipsum: Object
  }
};
</script>

<style>

</style>