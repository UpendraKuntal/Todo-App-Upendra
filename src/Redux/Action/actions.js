import { ADD_TODO,  MARL_ALL_COMPLETED_TODO, REMOVE_TODO, SEARCH_TODO } from "./actionTypes";

export const addTodo = (text,date) => ({
    type: ADD_TODO,
    payload:{text,date}
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload:{id}
})


export const updateSearchTodo = (search) => ({
    type: SEARCH_TODO,
    payload:{search}
})
export const markAllCompleted = (filter) => ({
    type: MARL_ALL_COMPLETED_TODO,
    
})