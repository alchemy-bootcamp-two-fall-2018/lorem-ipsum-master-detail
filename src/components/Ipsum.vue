<template>
    <li>
        <div class="info">
            <p v-bind:href="ipsum.authorUrl">Author Info:</p>
            <h3>{{ ipsum.title }}</h3>
            <div v-html="ipsum.body">
                <p>category: {{ ipsum.category }}</p>
                <p>author: {{ ipsum.author }}</p>
                <p>published on: {{ ipsum.publishedOn }}</p>
                <p>{{ ipsum.body }}</p>
            </div>
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
