<template>
  <section>
    <div v-if="edit">
      <h2>Edit {{ipsum.title}}</h2>
      <IpsumForm
        :ipsumToUpdate="ipsum"
        :ipsumTypes="ipsumTypes"
        :onAdd="handleEdit"
        :onCancel="() => edit = false"/>
    </div>
    <IpsumList 
      v-if="!edit"
      :ipsum="ipsum"
      :onEdit="() => edit = true"/>
  </section>
</template>

<script>
import IpsumList from './IpsumList';
import IpsumForm from './IpsumForm';
export default {
    data() {
        return {
            edit: false
        };
    },
    props: {
        ipsum: Object,
        ipsumTypes: Array,
        onEdit: Function
    },
    components: {
        IpsumList,
        IpsumForm
    }
};
</script>

<style>

</style>