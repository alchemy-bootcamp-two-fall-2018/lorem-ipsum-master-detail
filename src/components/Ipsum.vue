<template>
    <div>
        <IpsumDetail
        :ipsum="ipsum"/>
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';

export default {
  components: {
    IpsumDetail
  },
  props: {
    ipsum: Object
  }
};
</script>

<style>

</style>