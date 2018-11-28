<template>
    <ul id="ipsumList">
        <IpsumItem v-for="ipsum in ipsums"
        @click.native="onSelect(ipsum)"
        :key="ipsum.title"
        :ipsum="ipsum"
        />
    </ul>
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
