//放call API的地方
export default {
    add: ({ commit }, payload) => {
        // function寫在mutations裡
        commit('appendPet', payload)
    }
}
