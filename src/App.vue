<template>
  <div id="app">
    <Header 
      :sort="sort" 
      :filter="filter" 
      :types="ipsumTypes"/>

    <AddIpsum
      :onAdd="handleAdd"
      :ipsumTypes="ipsumTypes"/>

    <Ipsums 
      :ipsums="sortedipsums" 
      :onSelect="handleSelect"/>

    <IpsumDetail 
      :ipsum="selected"
      :ipsumTypes="ipsumTypes"
      :onEdit="handleEdit"/>

  </div>
</template>


<script>

export default {
  name: 'app',
  components: {c
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
