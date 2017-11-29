
export default {
    actions : {
        updateRequest({dispatch},formData) {
            return axios.post(formData.url, formData.data).then(response => {
                dispatch('showNotification',{level:'success',msg:'Update success'})
            }).catch(errors => {
                dispatch('showNotification',{level:'error',msg:'Update failed'})
            })
        },
    }
}