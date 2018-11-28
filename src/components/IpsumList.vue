<template>
    <ul>
        <li v-bind:key="ipsum.author" v-for="ipsum in ipsums">
            <p><img v-bind:src="imageSrc"></p>
            <p>Author: {{ipsum.author}}</p>
            <p>Title: {{ipsum.title}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            imageSrc: 'https://i.pinimg.com/originals/e1/9a/62/e19a628908e921664dd0fe79e26f1125.png'
        };
    },
    props: {
        ipsums: Array
    }
};
</script>

<style>
img {
    width: 100px;
}

ul {
    list-style: none;
}

li {
    display: inline-block;
    margin: 1%;
    padding: 5px;
    border: 1px solid blue;
    width: 8vw;
    height: auto;
}
</style>
