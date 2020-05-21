

export default {
    login({commit}, userInfo) {
        return new Promise((resolve) => {
            //todo
            console.log(userInfo)
            commit('setToken', 'admin')
            resolve('login')
        })
    }
}