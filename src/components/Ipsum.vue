<template>
    <li>
        <div class="info">
            <h3>{{ ipsum.title }}</h3>
            <p><b>Author:</b> {{ ipsum.author }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        ipsum: Object,
    }
};
</script>

<style>
.info {
    border: 1px solid black;
}

li {
    list-style: none;
}
</style>