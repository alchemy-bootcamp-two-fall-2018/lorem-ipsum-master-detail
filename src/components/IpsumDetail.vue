<template>
    <div class="detail" v-if="ipsum">
        <h3> {{ ipsum.title }} - {{ ipsum.category }} category </h3>
        <h3> Author: {{ ipsum.author }} - published on {{ ipsum.publishedOn }}</h3>
        <h3> Example copy: </h3>
        <p class="body-copy" v-html="ipsum.body"></p>
    </div>
</template>

<script>
export default {
  props: {
    ipsum: Object
  }
};
</script>

<style>

.detail {
    padding: 20px;
    width: 75%;
}
.body-copy img { 
    display: block;
    padding: 10px;
    max-width: 300px;
}


</style>