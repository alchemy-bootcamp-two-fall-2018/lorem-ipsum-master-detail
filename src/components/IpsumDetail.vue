<template>
    <div class="detail" v-if="ipsum">
        <h3> {{ ipsum.title }} - {{ ipsum.category }} category </h3>
        <p> Author: {{ ipsum.author }} - published on {{ ipsum.publishedOn }}</p>
        <p> Example copy: </p>
        <p class="body-copy" v-html="ipsum.body"></p>
    </div>
    <div v-else>
        <p>Please select an Ipsum!</p>
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