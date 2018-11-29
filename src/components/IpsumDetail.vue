<template>
  <div>
     {{ipsum.name}}
     By {{ipsum.author}} <br />
     Category: {{ipsum.category}}
     
        
  </div>
</template>

<script>

export default {

  props: {
    ipsum: Object
  },
  
}
</script>

<style>

</style>
