<template>
    <header>
      <h1> Lorem Ipsum List</h1>
      <img src="../../public/lorem-logo.png">
    </header>
</template>

<script>
import ipsumsApi from '../ipsumsApi';
export default {
//   data() {
//     return {
//       types: animalsApi.getTypes()
//     };
//   },
//   props: {
    
//   }
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
h1 {
    padding: 10px;
    font-size: 3em;
}
</style>