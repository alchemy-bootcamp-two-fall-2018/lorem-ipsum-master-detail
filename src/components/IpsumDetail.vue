<template>
    <ul>
        <li>
          <h4> Author: {{ipsum.author}}</h4>
          <p>Title: {{ipsum.title}}</p>
          <p> Category {{ipsum.category}}</p>
          <p v-html="ipsum.body"></p>
        </li>
    </ul>
</template>

<script>

export default {
  props: {
    ipsum: Object
  }
}; 
</script>

<style>
img {
  max-width: 100px; 
}
</style>