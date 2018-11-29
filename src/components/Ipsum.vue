<template>
    <div>
        <IpsumForm />
        <IpsumDetail
        :ipsum="ipsum"/>
        
    </div>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
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