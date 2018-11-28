<template>
  <section>
  <header>Ipsums</header>
  <Ipsums/>
  </section>
</template>

<script>
import Ipsums from './components/Ipsums.vue';

export default {
    components: {
        Ipsums
    }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
