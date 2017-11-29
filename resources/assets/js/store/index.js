import Vue from 'vue'
import Vuex from 'vuex'


import AuthUser from './modules/auth-user'
import Login from './modules/login'
import UpdateRequest from './modules/update-request'
import Notification from './modules/notification'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AuthUser,
        Login,
        UpdateRequest,
        Notification
    },
    strict: true
})