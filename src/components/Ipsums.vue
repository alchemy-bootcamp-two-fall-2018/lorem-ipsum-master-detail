<template>
    <ul>
    <Ipsum v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        :key="ipsum.title"
        :ipsum="ipsum"/>
  </ul>
</template>

<script>
import Ipsum from './Ipsum.vue';

export default {
    props: {
        ipsums: Array,
        onSelect: Function
    },
    components: {
        Ipsum
    }
};
</script>

<style>
ul {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
