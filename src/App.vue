<template>
  <div id="app">
    <Header
        :sort="sort"
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
                name: '',
                category: ''
            },
            sort: {
                field: '',
                direction: 0
            }
            // selected: null
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
                const hasTitle = !this.filter.name || ipsum.title.includes(this.filter.name);
                const hasCategory = !this.filter.category || ipsum.category.includes(this.filter.category);
                return hasTitle && hasCategory;
            });
        },
        sortedIpsums() {
            const field = this.sort.field;
            const direction = this.sort.direction;

            return this.filteredIpsums.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1 * direction;
                }
                if(a[field] < b[field]) {
                    return -1 * direction;
                }
                return 0;
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
