<template>
  <section>
    <p>What the Ipsum!?...</p>
    <IpsumForm/>
    <IpsumDetail/>
  </section>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';
export default {
  components: {
    IpsumDetail,
    IpsumForm
  }
};
</script>

<style>
</style>