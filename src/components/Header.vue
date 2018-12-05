<template>
    <header>
        <h1> Lorem Ipsum List</h1>
        <img src="./bob-ross.jpg" alt="photo-of-bob-ross" class="pic"/>
    </header>
</template>

<script>
// import ipsumsApi from '../ipsumsApi';
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>
header {
    background: rgb(14, 213, 240);
    color: rgb(167, 182, 31);
    padding: 10px;
    text-align: center;
    border: 20px solid black;
}
img {
    width: 80%;
    padding: 10px;
    border: 20px rgba(185, 231, 17, 0.719);
    border-color: rgb(159, 240, 28);
}
h1, h2 {
    padding: 10px;
    font-size: 3em;
}
</style>
