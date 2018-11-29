<template>
    <div id="ipsums-container">
        <h2>Ipsums</h2>
        <Ipsum/>
        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"
        />
    </div>
</template>

<script>
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
import ipsumApi from '../../ipsumApi.js';
export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
        }
    },
    components: {
        IpsumList,
        Ipsum
    },
    methods: {
        handleSelect(ipsum) {
            this.selected = ipsum;
            console.log(ipsum, 'you selected that');
        }
    }
}
</script>

<style>

</style>
