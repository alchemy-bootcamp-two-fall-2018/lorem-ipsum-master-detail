<template>
    <ul>
        <h3>This is the ipsums component</h3>
    </ul>
</template>

<script>

import ipsumApi from '../ipsumApi.js';
export default {
    data() {
        return {
        ipsums: ipsumApi.getIpsums()
        } 
    }
}
</script>

<style>

</style>
