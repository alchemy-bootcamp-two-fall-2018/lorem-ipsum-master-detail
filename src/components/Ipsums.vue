<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
            v-bind:class="{ipsum: true, selected: ipsum === selected}"
            :key="ipsum.title"
            @click.native="onSelect(ipsum)"
            :ipsum="ipsum" />
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
    props: {
        ipsum: Object,
        selected: Object,
        // onSelect: Function
    },
    components: {
        Ipsum
    },
    methods: {
        onSelect() {
            console.log('Clicked!');
        }
    }
};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.ipsum.selected {
    background: red;
}

.ipsum {
    text-shadow: 1px 1px 1px white;
}
</style>