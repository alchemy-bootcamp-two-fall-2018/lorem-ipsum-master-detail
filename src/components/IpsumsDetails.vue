<template>
    <div>
        <h2>
        {{Ipsum.title}}
        </h2>
        <h3>
        {{Ipsum.author}}
        </h3>

    </div>
</template>

<script>
export default {

    props: {
        Ipsum: Object
    }

};
</script>

<style>

</style>
