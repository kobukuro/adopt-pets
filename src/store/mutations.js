//用來update state
export default {
    appendPet: (state, { species, pet }) => {
        state[species].push(pet)
    }
}
