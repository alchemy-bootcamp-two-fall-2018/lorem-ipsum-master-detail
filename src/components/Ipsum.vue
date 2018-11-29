<template>
  <ul>
        <h3>{{ipsum.title}}</h3>

        <IpsumDetail
          v-bind:ipsum="ipsum"
        />

        <IpsumForm

        /> -->

  </ul>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue'
import IpsumForm from './IpsumForm.vue'

export default {
  props: {
    ipsum: Object
  },
  components: {
    IpsumDetail,
    IpsumForm
  }
}
</script>

<style>

</style>
