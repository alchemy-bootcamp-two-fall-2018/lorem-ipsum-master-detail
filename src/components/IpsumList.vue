<template>
    <div id="ipsumList-container">
        <h2>IpsumList</h2>
        <p>{{ipsums[0].title}}</p>
        <IpsumItem/>
    </div>
</template>

<script>
import IpsumItem from './IpsumItem.vue';
export default {
    components: {
        IpsumItem
    },
    props: {
        ipsums: Array,
    }
}
</script>

<style>

</style>
