<template>
    <section>
        <h1>Click and Pick your Ipsum!</h1>
        <IpsumList 
            :ipsums="ipsums"
            :onSelect="handleSelect"/>
        <AddIpsum v-bind:onAdd="handleAdd" class="addbox"/>
        <Ipsum :ipsum="selected"/>
    </section>
</template>

<script>
import ipsums from '../../data.js';
import IpsumList from './IpsumList';
import Ipsum from './Ipsum';
import AddIpsum from './AddIpsum.vue';

export default {
    data() {
        return {
            ipsums,
            selected: null
        };
    },

    components: {
        IpsumList,
        Ipsum,
        AddIpsum
    },

    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
        },

        handleAdd(ipsum) {
            this.ipsums.push(ipsum);
            this.handleSelect(ipsum);
        }
    }
};
</script>

<style>
body {
    background-color: rgb(138, 155, 15);
}
h1 {
    text-align: center;
}
.addbox {
    background-color: rgb(189, 21, 80);
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    width: 50%;
    margin: auto;
    margin-top: 10px;
}
.addbox h3 {
    text-align: center;
}

</style>
