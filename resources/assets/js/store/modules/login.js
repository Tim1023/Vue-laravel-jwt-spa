import jwtToken from './../../helpers/jwt'

export default {
    actions : {
        loginRequest({dispatch},formData) {
            return axios.post('/api/login', formData).then(response => {
                dispatch('firstLoadAuthUser')
                dispatch('loginSuccess',response.data)
            })
        },
        loginSuccess({dispatch},tokenResponse) {
                jwtToken.setToken(tokenResponse.token);
                jwtToken.setRefreshToken(tokenResponse.refreshToken);
                return dispatch("setAuthUser")
        },
        logoutRequest({dispatch}) {
            return axios.post('/api/logout').then(response => {
                jwtToken.removeToken();
                jwtToken.removeRefreshToken();
                dispatch('unsetAuthUser')
            });
        }
    }
}