<template>
    <div id="ipsums-container">
        <h2>Ipsums</h2>
        <Ipsum/>
        <IpsumList/>
    </div>
</template>

<script>
import IpsumList from './IpsumList.vue';
import Ipsum from './Ipsum.vue';
export default {
    components: {
        IpsumList,
        Ipsum
    }
}
</script>

<style>

</style>
