<template>
    <div>
    <form>
        <label for="">
            <span>Title: </span>
            <input type="text">
        </label>
        <label for="">
            <span>Category: </span>
            <input type="text">
        </label>
        <label for="">
            <span>Author: </span>
            <input type="text">
        </label>
        <label for="">
            <span>Author Url:</span>
            <input type="text">
        </label>
        <label for="">
            <span>Published on: </span>
            <input type="text">
        </label>
        <label for="">
            <span>Body: </span>
            <textarea></textarea>
        </label>
        <button @click.prevent = "onAdd">Add an ipsum!</button>
        <button @click.prevent = "onCancel">Cancel</button>
    </form>
    </div>
</template>

<script>
export default {
  props: {
    onCancel: Function,
    onAdd: Function
  }

};
</script>

<style>
label {
    display: flex;
}
span {
    display: inline-block;
    padding: 3px;
}
button {
    margin: 5px;
    width: 20vw;
    font-size: 18px;
}



</style>
