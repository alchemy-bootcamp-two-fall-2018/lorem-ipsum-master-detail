<template>
  <section>
  <header>Ipsums App</header>
  <Ipsums/>
  <IpsumList/>
  <IpsumForm/>
  <Ipsum/>
  <IpsumDetail/>
  </section>
</template>

<script>
import Ipsums from './components/Ipsums.vue';
import IpsumList from './components/IpsumList.vue';
import IpsumForm from './components/IpsumForm.vue';
import Ipsum from './components/Ipsum.vue';
import IpsumDetail from './components/IpsumDetail.vue';

export default {
    components: {
        Ipsums,
        IpsumList,
        IpsumForm,
        Ipsum,
        IpsumDetail   
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
