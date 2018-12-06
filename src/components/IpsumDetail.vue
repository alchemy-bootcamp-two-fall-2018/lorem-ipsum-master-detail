<template>
    <section v-if="ipsum" class="detail"> 
      <div class="top">
        <h3> Ipsum Title {{ipsum.title}} </h3>
        <p>Author: {{ipsum.author}} </p>
        <p>Category: {{ipsum.category}} </p>
      </div>
    
      <div class="body"><span>Filler Text Body Here.</span>
      <div v-html="ipsum.body" class="words"></div>
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

<style scoped>
.detail {
    text-align: center;
    border: 3px cornflowerblue;
  }
  .body {
    padding-top: 10px;
  }
  h3 {
    padding: 0px;
    margin: 0px;
    font-size: 2em;
    color: rgb(12, 119, 83);
  }

</style>
