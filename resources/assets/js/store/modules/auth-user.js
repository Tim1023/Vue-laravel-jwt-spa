import * as types from './../mutation-type'

export default {
    state: {
        authenticated: false,
        name: null,
        email: null
    },
    mutations: {
        [types.UPDATE_PROFILE_NAME](state, payload){
            state.name = payload.value;
        },
        [types.UPDATE_PROFILE_EMAIL](state, payload){
            state.email = payload.value;
        },
        [types.FIRST_LOAD_AUTH_USER](state){
            state.authenticated = true;
        },
        [types.SET_AUTH_USER](state, payload){
            state.authenticated = true;
            state.name = payload.user.name;
            state.email = payload.user.email;
        },
        [types.UNSET_AUTH_USER](state){
            state.authenticated = false;
            state.name = null;
            state.email = null;
        }
    },
    actions: {
        setAuthUser({commit, dispatch}){

            return axios.get('/api/user').then(response => {
                commit({
                    type: types.SET_AUTH_USER,
                    user: response.data

                });

            }).catch(error => {
                dispatch('refreshToken')
            })
        },
        firstLoadAuthUser({commit}){
            commit({
                    type: types.FIRST_LOAD_AUTH_USER,
            });

        },
        unsetAuthUser({commit}) {

                commit({
                    type: types.UNSET_AUTH_USER
                })
        },
        refreshToken({commit, dispatch}) {
            return axios.post('/api/token/refresh').then(response => {
                dispatch('loginSuccess',response.data)
            }).catch(error => {
                dispatch('logoutRequest')
            })
        },

    },
}