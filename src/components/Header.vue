<template>
<header>
    <span>Ipsum Catalog</span>
    </header>
    </template>

<script>
export default {

  props: {
    filter: Object,
    types: Array,
    sort: Object
  }
};
</script>

<style>
    header {
        padding: 20px;
    }
</style>