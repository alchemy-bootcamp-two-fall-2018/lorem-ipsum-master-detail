<template>
    <Div>
         <IpsumDetail
        :selected="selected"
        />

        <div v-if="!show">
            <button @click="show = true">Add a Ipsum! (file Ipsum)</button>
        </div>
        <div v-else>
            <h3>
                Add a new Ipsum
            </h3>
            <IpsumFormOG
            :onAdd="handleAdd"/>
        </div>
    </div>


</template>

<script>

import IpsumDetail from './IpsumsDetail.vue';
import IpsumFormOG from './AddForm.vue';

export default {
    data() {
        return {
            show: false
        };
    },

    props: {
        selected: Object
    },
    components: {
        IpsumDetail,
        IpsumFormOG
    },
    methods: {
        handleAdd(ipsum) {
            this.show = false;
            this.onAdd(ipsum);
        }
    }
};
</script>

<style>

</style>
