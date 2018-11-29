<template>
    <div>
        <p> this is the container for the detail component</p>
        <IpsumDetail :ipsum="ipsum"/>
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';

export default {
  props: {
    ipsum: Object
  },
  components: {
    IpsumDetail
  }
};
</script>

<style>

</style>
