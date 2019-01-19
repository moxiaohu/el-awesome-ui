import elaTable from './src/main.vue'

elaTable.install = function(Vue) {
    Vue.component(elaTable.name, elaTable)
}

export default elaTable
