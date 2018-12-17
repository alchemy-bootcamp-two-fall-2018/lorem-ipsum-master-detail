<template>
  <section>
    <div v-if="ipsum">
      <h2>{{ipsum.title}}</h2>
      <p>{{ipsum.author}}</p>
      <p>{{ipsum.publishedOn}}</p>
      <p>{{ipsum.body}}</p>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style scoped lang="postcss">
section {
  padding: 10px;
  color: white;
}
</style>
