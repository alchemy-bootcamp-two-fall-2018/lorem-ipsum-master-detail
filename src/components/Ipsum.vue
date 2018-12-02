<template>
    <Div>
         <IpsumDetail
        :selected="selected"
        />
    </div>
</template>

<script>

import IpsumDetail from './IpsumsDetail.vue';

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
        IpsumDetail
        
    },
    methods: {
        handleAdd(ipsum) {
            this.data.push(ipsum);
            this.handleSelect(ipsum);
            console.log('you have added', ipsum);
        }, 
    // }, 
    // handleAdd(ipsum) {
    //     this.data.push(ipsum);
    //     this.handleSelect(ipsum);
    //     console.log('you have added', ipsum);
    // }, 
    }
};
</script>

<style>

</style>
