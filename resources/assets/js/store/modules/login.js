import jwtToken from './../../helpers/jwt'

export default {
    actions : {
        loginRequest({dispatch},formData) {
            return axios.post('/api/login', formData).then(response => {
                jwtToken.setToken(response.data.token);
                jwtToken.setRefreshToken(response.data.refreshToken);
                dispatch("setAuthUser")
            })
        },
        loginSuccess({dispatch},tokenResponse) {
                jwtToken.setToken(tokenResponse.token);
                jwtToken.setRefreshToken(tokenResponse.refreshToken);
                dispatch("setAuthUser")
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