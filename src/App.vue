<template>
    <div id="app">
        <Header/>
        <Ipsums/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';

export default {
    name: 'app',
    components: {
        Header,
        Ipsums
    }

};

</script>

<style>
</style>
