<template>
    <div>
        <ul>
        <Ipsum v-for="(Ipsum, i) in Ipsums"
            :key="i"
            :Ipsum="Ipsum"
            v-bind:class="{ Ipsum: true, selected: Ipsum === selected}"
            v-on:click.native="onSelect(Ipsum)"
            />
        </ul>

    </div>
</template>

<script>
import Ipsum from './IpsumsItem.vue';

export default {
    props: {
        Ipsums: Array,
        onSelect: Function,
        selected: Object
    },

    components: {
        Ipsum
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
