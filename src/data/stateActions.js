export const changeState = (writable, param, value) => {
    writable.update(state=> { 
        state[param] = value
        return state
    });
}