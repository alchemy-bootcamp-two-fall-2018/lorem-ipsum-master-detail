<template>
  <section v-if="ipsum">
    <h3>
      {{ipsum.title}}
    </h3>
    <div v-html="ipsum.body" class="example"></div>
  </section>

</template>

<script>
export default {
    props: {
        ipsum: Object,
        onEdit: Function
    }
};
</script>

<style>
.example {
    margin: 0px 100px;
}
</style>
