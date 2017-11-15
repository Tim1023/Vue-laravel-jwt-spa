require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';
import store from './store/index';
import jwtToken from './helpers/jwt'
import App from './components/app.vue';

import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(jwtToken.getToken()){
        console.log("!!@#@!#!@#!@#!@")
        config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});





// Validator.localize('zh_CN', zh_CN);

// Install the Plugin and set the locale.
Vue.use(VeeValidate
//     , {
//     locale: 'zh_CN'
// }
);

Vue.use(VueRouter);

Vue.component('app',App);

new Vue({
    el: '#app',
    router,
    store

});
