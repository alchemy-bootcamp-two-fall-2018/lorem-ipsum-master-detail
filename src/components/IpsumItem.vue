<template>
    <li>
        <div class=info>
          <h3>{{ipsum.title}}</h3>
          <h4>{{ipsum.author}}</h4>
          <h5>{{ipsum.category}}</h5>
          <!-- <p v-html="ipsum.body"></p> -->
        </div>
    </li>
</template>

import ipsum from '/assets/ipsumApi.js';

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style scoped>
li {
    border: 2px solid blue;
    margin: 5px;
}
img {
    display: none;
}
</style>
