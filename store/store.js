import axios from "axios"

export const state = () => ({
    eat: [],
})


export const mutations = {

}

export const getters = {
    sendEat(state){
        return state.eat;
    }
}

export const actions = {
    addUser({ state, commit }, payload) {
        let x1 = Number(payload.price);
        let x2 = Number(payload.select)
        let sum = x1 * x2;
        payload.total = sum;
        axios.post('https://nuxt-reserv-default-rtdb.firebaseio.com/tables.json', payload)
            .then(res => {
                console.log(res);
            })
        state.eat.push(payload);
    }
}