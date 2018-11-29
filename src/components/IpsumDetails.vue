<template>
  <section>
    <IpsumList 
      :ipsum="ipsum"/>
  </section>
</template>

<script>
import IpsumList from './IpsumList';
export default {
    props: {
        ipsum: Object,
        ipsumTypes: Array
    },
    components: {
        IpsumList
    }
};
</script>

<style>

</style>