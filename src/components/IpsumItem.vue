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
        background: rgb(127, 180, 224);
        box-shadow: 5px 10px 10px grey;
        height: 50px;
        cursor: pointer;
        border-radius: 10px;
    }
</style>
