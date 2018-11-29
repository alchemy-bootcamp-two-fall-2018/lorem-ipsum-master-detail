<template>
    <section>
        <div v-if="!ipsum">
            <p>Scroll and click on an ipsum to learn more!</p>
        </div>
        <div v-if="ipsum">
            <IpsumDetail :ipsum="ipsum"/>
        </div>
        <div v-if="!show">
            <button @click="show = true">Add an ipsum!</button>
        </div>
        <div v-else>
            <h3>Add your own Ipsum!</h3>
            <IpsumForm />
        </div>
    </section>
</template>

<script>
import IpsumDetail from './IpsumDetail.vue';
import IpsumForm from './IpsumForm.vue';

export default {
  data() {
    return {
      show: false
    };
  },

  props: {
    ipsum: Object
  },

  components: {
    IpsumDetail,
    IpsumForm
  },

  methods: {
    handleAdd(){
      this.show = true;
    }
  }
};
</script>

<style>

</style>
