<template>
    <IpsumList
    :ipsum="ipsum" />
</template>

<script>
import IpsumList from './IpsumList';

export default {
  props: {
    ipsum:Object

  },
  components: {
    IpsumList
  }

};
</script>

<style>

</style>
