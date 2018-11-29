<template>
    <section v-if="ipsum">
        <h3>
            {{ ipsum.title }}
            <button @click="onEdit">Edit</button>
        </h3>
        <p>This is {{ ipsum.title }}, a(n) {{ ipsum.category }} book by author {{ ipsum.author }}.</p>
        <p>{{ ipsum.body }}</p>
        <p>Publication Date: {{ ipsum.publishedOn }}. For more details: {{ ipsum.authorUrl }}</p>
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

</style>
