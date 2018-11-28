<template>
  <ul>

      <h3>This is the IpsumList component</h3>

      <IpsumItem v-for="ipsum in ipsums"
        v-bind:key="ipsum.title"
        v-bind:ipsum="ipsum"
      />
        
  </ul>
</template>

<script>
import IpsumItem from './IpsumItem.vue'

export default {
    props: {
      ipsums: Array
    },
    components: {
      IpsumItem
    }
}
</script>

<style>

</style>
