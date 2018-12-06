<template>
    <li>
        {{ipsum.title}}
    </li>
</template>

<script>
export default {
    props: {
        ipsum: Object
    }
}
</script>

<style>
li {
    font-family: 'Old Standard TT', serif;
    margin:5px 15px;
    background-color:ghostwhite;
    display: grid;
    list-style-type: none;
    padding: 10px 15px 10px 20px;
    grid-template-columns: repeat (auto-fit, minmax,(200px, 2fr));
}

</style>
