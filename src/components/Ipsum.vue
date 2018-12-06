<template>
      <li>
          <div class="info">
              <!-- <a href="{{ipsum.authorUrl}}" target="_blank"><h3>{{ipsum.title}}</h3></a> -->
              <h3>{{ipsum.title}}</h3>
              <p>{{ipsum.category}}</p>
              <p>{{ipsum.author}}</p>
          </div>
      </li>
</template>

<script>

export default {
  props: {
    ipsum: Object,
  }  
};
</script>

<style scoped lang="postcss">
@import '../../styles.css';
li {
  list-style:none;
  margin:20px;
  position: relative;
 height: 300px;
  /* overflow: hidden; */
   &:hover {
    img {
      transform: scale(1.3);
      filter: grayscale(0);
    }
    .info {
      bottom: 0;
    }
  } 
  border: solid 10px #613F75;
  cursor: pointer;
}
/* img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transition: 500ms;
  filter: grayscale(1);
} */
/* .info {
  transition: 500ms;
  position: absolute;
  bottom: -100px;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.8); */
  /* text-align: center; */
  /* padding: 5px; */

 h3, p { 
   margin: 0; 
 }

</style>


