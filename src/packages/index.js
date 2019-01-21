import elaTable from './table'
import elaBoard from './board'

const components = [
    elaTable,
    elaBoard
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  elaTable,
  elaBoard
}