<template>
  <ul>
        <h3>This is the Ipsum component</h3>

        <IpsumDetail
          
        />

        <IpsumForm

        />

  </ul>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue'
import IpsumForm from './IpsumForm.vue'

export default {
  components: {
    IpsumDetail,
    IpsumForm
  }
}
</script>

<style>

</style>
