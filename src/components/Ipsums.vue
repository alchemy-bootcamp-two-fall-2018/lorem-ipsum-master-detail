<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
            :key="ipsum.title"
            :ipsum="ipsum"
        />
        {{Ipsum}}
    </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';
import ipsumApi from '../../services/ipsumApi.js';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
        };
    },
    // props: {
    //     ipsums: Array
    // },
    components: {
        Ipsum
    }
};
</script>

<style>

</style>