<template>
    <section>
        <div v-if="edit">
            <h2>Edit {{ ipsum.title }}</h2>
            <IpsumForm
                :ipsumToUpdate="ipsum"
                :onAdd="handleEdit"
                :onCancel="() => edit = false"/>
        </div>
        <IpsumViewer
            v-if="!edit"
            :ipsum="ipsum"
            :onEdit="() => edit = true"/>
    </section>
</template>

<script>

import IpsumViewer from './IpsumViewer';
import IpsumForm from './IpsumForm';

export default {
  data() {
    return {
      edit: false
    };
  },
  props: {
    ipsum: Object,
    onEdit: Function
  },
  components: {
    IpsumViewer,
    IpsumForm
  },
  methods: {
    handleEdit(updatedIpsum) {
      this.edit = false;
      this.onEdit(this.ipsum, updatedIpsum);
    }
  },
  watch: {
    ipsum(old, updated) {
      if(old !== updated) {
        this.edit = false;
      }
    }
  }

};
</script>

<style>

</style>
