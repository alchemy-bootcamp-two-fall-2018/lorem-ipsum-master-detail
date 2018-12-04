<template>
    <li> 
      <ul>
        <h3>{{ ipsum.title }}</h3>
      </ul>
    </li>
</template>

<script>

export default {
  props: {
    ipsum: Object
  },
};
</script>

<style>
.info {
  transition: 500ms;
  position: absolute;
  bottom: -100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 5px;
}
</style>
