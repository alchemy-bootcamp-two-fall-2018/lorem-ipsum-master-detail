<template>
    <li>
        <div class="info">
            <img v-bind:src="ipsum.authorUrl" />
            <h3>{{ ipsum.title }}</h3>
            <p>category: {{ ipsum.category }}</p>
            <p>author: {{ ipsum.author }}</p>
            <p>published on: {{ ipsum.publishedOn }}</p>
            <p>{{ ipsum.body }}</p>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    ipsum: Object
  }
};
</script>

<style>

</style>
