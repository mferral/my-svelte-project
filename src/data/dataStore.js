import { writable, get } from 'svelte/store';
import { changeState } from './stateActions'

const state = {
    list: [],
    isLoading: false,
    isCreating: false,
}

export const posts = writable(state);

const actions = () => {
    return {
        get: async () => {
            changeState(posts, 'isLoading', true);            
            const list = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())            
            changeState(posts, 'list', list);
            changeState(posts, 'isLoading', false);
            console.log(list);
            return {status: 200}
        },
        add: form => {
            changeState(posts, 'list', [...get(posts).list, form]);
        }
    }
}
export const actionsPost = actions();