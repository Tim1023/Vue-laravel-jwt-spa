import jwtToken from './../../helpers/jwt'

export default {
    actions : {
        loginRequest({dispatch},formData) {
            return axios.post('/api/login', formData).then(response => {
                jwtToken.setToken(response.data.token);
                dispatch("setAuthUser")
            })
        },
        logoutRequest({dispatch}) {
            jwtToken.removeToken()

            dispatch('unsetAuthUser')
        }
    }
}