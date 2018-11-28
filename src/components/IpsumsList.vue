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
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    list-style-type: none;
    margin: 0;
    padding: 0;
}

</style>
