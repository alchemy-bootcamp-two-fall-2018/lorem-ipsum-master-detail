<template>   
    <section v-if="ipsum">
        <div>
            <h3>{{ ipsum.title }}</h3>
            <h4>Author: {{ ipsum.author }}</h4>
            <h4>Topic: {{ ipsum.category }}</h4>
        </div>

        <div>
            <div v-html="ipsum.body"></div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style>
h3 {
    text-align: center;
}
p {
    font-weight: bold;  
}
img {
    float: left;
    max-height: 10vh;
    display: inline-flex;
    border: 2px solid black;
    border-radius: 50px;
}
</style>
