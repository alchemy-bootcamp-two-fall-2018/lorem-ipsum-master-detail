<template>
    <li>
        <div>
            <h4>{{ ipsum.title }} - {{ ipsum.category }}</h4>
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
    li {
        text-align: center;
        list-style: none;
        background: lightgoldenrodyellow;
        box-shadow: 5px 10px 10px grey;
        height: 50px;
        cursor: pointer;
    }
</style>
