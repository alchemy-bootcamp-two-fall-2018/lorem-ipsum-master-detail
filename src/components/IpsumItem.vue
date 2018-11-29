<template>
    <li>
        <div class="info">
            <h3>{{ipsum.title}}</h3>
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
<style scoped>
li {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 
  transition: 1s; 
  background: #DADADA;
}
li:hover {
  box-shadow: 5px 5px 5px black; 
  transform: scale(1.2) rotate(-10deg); 
  background: rgb(50, 100, 150); 
  color:white;
}
li:hover:nth-child(2n) {
  transform:rotate(10deg); 
  background:rgb(225, 83, 27); 
  color:white; 
}

</style>
