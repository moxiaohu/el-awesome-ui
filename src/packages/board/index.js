import elaBoard from './src/main.vue'

elaBoard.install = function(Vue) {
    Vue.component(elaBoard.name, elaBoard)
}

export default elaBoard
