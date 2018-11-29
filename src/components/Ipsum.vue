<template>
    <section>
        <div v-if="!ipsum">
            <p>Scroll and click on an ipsum to learn more!</p>
        </div>
        <div v-if="ipsum">
            <IpsumDetail :ipsum="ipsum"/>
        </div>
    </section>
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
