<template>
    <header>
        <h1>{{pageTitle}}</h1>
        <h2>{{pageLogo}}</h2>
    </header>
</template>

<script>
export default {
    data() {
        return {
            pageTitle: 'Ipsum',
            pageLogo: 'Logo'
        };
    }
};
</script>

<style>
    h1, h2 {
        display: inline;
        margin: 2%;
        color: white;
    }
    header {
        background-color: rgb(110, 7, 88);
    }
</style>
