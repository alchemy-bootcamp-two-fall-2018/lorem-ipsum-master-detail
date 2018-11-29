<template>
    <header>
        <h1>{{pageTitle}}</h1>
        <h2> Lorem Ipsum List</h2>
        <!-- <img src="../public/lorem-logo.png"> -->
    </header>
</template>

<script>
// import ipsumsApi from '../ipsumsApi';
export default {
  data() {
    return {
        pageTitle: 'Ipsum',
    };
  }
};
</script>

<style scoped>
header {
    background: rgb(14, 213, 240);
    color: rgba(179, 154, 44, 0.514);
    padding: 10px;
    text-align: center;
    border: 20px solid black
}
img {
    width: 100%;
    padding: 10px;
    border: 10px rgba(179, 154, 44, 0.514);
}
h1, h2 {
    padding: 10px;
    font-size: 3em;
}
</style>