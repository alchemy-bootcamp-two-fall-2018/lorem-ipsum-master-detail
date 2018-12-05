<template>
  <div id="app">
    <Header
        :filter="filter"
        :types="ipsumTypes"/>
    <Ipsums />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Ipsums from './components/Ipsums.vue';
import ipsumApi from './services/ipsumApi';

export default {
    data() {
        return {
            ipsums: ipsumApi.getAll(),
            filter: {
                title: '',
                category: ''
            },
            selected: null
        };
    },
    components: {
        Header,
        Ipsums
    },
    computed: {
        ipsumTypes() {
            const types = [];
            this.ipsums.forEach(ipsum => {
                if(!types.includes(ipsum.category)) {
                    types.push(ipsum.category);
                }
            });
            return types;
        },
        filteredIpsums() {
            return this.ipsums.filter(ipsum => {
                const hasTitle = !this.filter.title || ipsum.title.includes(this.filter.title);
                return hasTitle;
            });
        }

    }
};
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
