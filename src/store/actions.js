//放call API的地方
export default {
    addPet: ({ commit }, payload) => {
        // function寫在mutations裡
        commit('appendPet', payload)
    }
}
