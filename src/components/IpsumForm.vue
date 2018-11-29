<template>
    <div>Ipsum Form</div>
</template>

<script>
export default {

};
</script>

<style>

</style>

// Form for creating or updating an ipsum
// gets passed an onAdd callback called for add and edit when form submitted
// gets passed the ipsum if updating
// Has own state for managing data being updated (copy in data function when editing)
// Only show "cancel" button when updating. Calls onCancel when cancel button clicked