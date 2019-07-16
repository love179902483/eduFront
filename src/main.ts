import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './inventory/css/css.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import './plugins/vuetify';
import router from './router';
import store from './store/index';
import VueEcharts from 'vue-echarts-ts';
// import { Test } from 'mocha';
import axios from 'axios';
import Notifications from 'vue-notification';

axios.defaults.baseURL = 'http://localhost:3000';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    iconfont: 'md',
});
Vue.use(VueEcharts);
Vue.use(Notifications);

router.beforeEach((to, from, next) => {
    console.log(`to.name = ${to.name}, from.name = ${from.name}`);
    next();
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
