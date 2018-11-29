<template>
<div v-if="ipsum">
  <h2> 
     {{ipsum.title}} 
  </h2>
  <span>Category: {{ipsum.category}}</span>
  <span>Author: {{ipsum.author}}</span>
  <span><a :href="ipsum.authorUrl" target="_blank">Author URL</a></span>
  <span>Published on: {{ipsum.publishedOn}}</span>
  <p v-html="ipsum.body" class="details"></p>

</div>

<div v-else>
  <h4 class="select-ipsum"> Click on Ipsum for details </h4>
</div>  
</template>

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style scoped>
div {
    margin-top: 12px;
}

span {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15px;
    color: white;
    font-size: 18px;
    background-color: steelblue;
}
span.title {
    color: steelblue;
}
p {
    font-size: 18px;
  
}
p.details {
    border-top: 1px solid steelblue;
    color:steelblue;
    margin-bottom: 40px;
}
h4.select-ipsum {
    font-size: 20px;
    font-style: italic;
    color:white;
    font-weight: bold;
    background-color:steelblue;
    padding: 50px;
}
a {
    color: gold;
}


</style>
