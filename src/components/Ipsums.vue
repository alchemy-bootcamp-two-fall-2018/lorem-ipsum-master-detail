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
export default {
    components: {
        IpsumList,
        Ipsum
    },
    props: {
        ipsums: Array,
    }
}
</script>

<style>

</style>
