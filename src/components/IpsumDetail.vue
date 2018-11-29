<template>
    <section>
        <div v-if="ipsum">
            <h3>{{ipsum.title}}</h3>
            <h4>{{ipsum.author}}</h4>
            <h4>{{ipsum.publishedOn}}</h4>
            <h4 v-html="ipsum.body"></h4>
        </div>

        <div v-else></div>
    </section>
</template>

<script>
export default {
    props: {
        ipsum: Object,
    }
};
</script>

<style scoped>
div {
    border: 1px solid gray;
   
    align-content: center;
    
}

</style>
