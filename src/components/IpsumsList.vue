<template>
    <div>
        <ul>
        <Ipsum v-for="Ipsum in Ipsums"
            :key="Ipsum.author"
            :Ipsum="Ipsum"/>
        </ul>

    </div>
</template>

<script>
import Ipsum from './IpsumsDetails.vue';

export default {
    props: {
        Ipsums: Array
    },

    components: {
        Ipsum,
    }
};
</script>

<style>

</style>
