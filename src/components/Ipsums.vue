<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum"
        />
    </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';
import ipsumApi from '../services/ipsumApi.js';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
        };
    },
    components: {
        Ipsum
    }
};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

}
</style>