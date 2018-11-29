<template>
    <li>
        
        <div class="info">
            <h3>{{ipsum.title}}</h3>
            <p>{{ipsum.category}}</p>
            <p>{{ipsum.author}}</p>
            <p>{{ipsum.authorUrl}}</p>
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

<style scoped lang="postcss">
@import '../../styles.css';
li {
  position: relative;
 /* height: $card-size;*/
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.3);
      filter: grayscale(0);
    }
    .info {
      bottom: 0;
    }
  }
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transition: 500ms;
  filter: grayscale(1);
}
.info {
  transition: 500ms;
  position: absolute;
  bottom: -100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 5px;
}
h3, p {
  margin: 0;
}
</style>


