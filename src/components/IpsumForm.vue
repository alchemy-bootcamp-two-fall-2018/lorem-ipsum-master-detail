<template>
    <div>
    <form @submit.prevent="onAdd(ipsum)">
        <label for="">
            <span>Title: </span>
            <input v-model="ipsum.title" type="text">
        </label>
        <label for="">
            <span>Category: </span>
            <input v-model="ipsum.category" type="text">
        </label>
        <label for="">
            <span>Author: </span>
            <input v-model="ipsum.author" type="text">
        </label>
        <label for="">
            <span>Author Url:</span>
            <input v-model="ipsum.authorUrl" type="text">
        </label>
        <label for="">
            <span>Published on: </span>
            <input v-model="ipsum.publishedOn" type="text">
        </label>
        <label for="">
            <span>Body: </span>
            <textarea v-model="ipsum.body"></textarea>
        </label>
        <button type="submit">Add an ipsum!</button>
        <button @click = "onCancel">Cancel</button>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ipsum: {
        title: '',
        category: '',
        author: '',
        authorUrl: '',
        publishedOn: '',
        body: '',
      }
    };
  },
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
