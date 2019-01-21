import Vue from "vue";
import { Button, Table, TableColumn, Pagination, Row, Col } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

import packages from "../packages/index"

locale.use(lang);

Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Row);
Vue.use(Col);

packages.install(Vue)


