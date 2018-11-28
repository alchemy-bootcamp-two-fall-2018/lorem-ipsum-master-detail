<template>
    <li>
        <div class=info>
          <h3>{{ipsum.title}}</h3>
        </div>
    </li>
</template>

import ipsum from '/assets/ipsumApi.js';

<script>
export default {
    props: {
        ipsum: Object
    }
};
</script>

<style>

</style>
