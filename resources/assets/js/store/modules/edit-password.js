
export default {
    actions : {
        updatePasswordRequest({dispatch},formData) {
            return axios.post('/api/user/password/update', formData).then(response => {
                dispatch('showNotification',{level:'success',msg:'Update Password success'})
            }).catch(errors => {
                dispatch('showNotification',{level:'error',msg:'Update Password failed'})
            })
        },
    }
}