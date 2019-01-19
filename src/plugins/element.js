import Vue from "vue";
import { Button, Table, TableColumn } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

import packages from "../packages/index"

locale.use(lang);

Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);

packages.install(Vue)


