import { ADD_TODO, FILTER_TODO, MARK_COMPLETE_TODO, MARL_ALL_COMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (text,date) => ({
    type: ADD_TODO,
    payload:{text,date}
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload:{id}
})
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload:{id}
})
export const markCompleted = (id) => ({
    type: MARK_COMPLETE_TODO,
    payload:{id}
})
export const markInCompleted = (id) => ({
    type: MARK_INCOMPLETE_TODO,
    payload:{id}
})
export const filter = (filter) => ({
    type: FILTER_TODO,
    payload:{filter}
})

export const updateSearchTodo = (search) => ({
    type: SEARCH_TODO,
    payload:{search}
})
export const markAllCompleted = (filter) => ({
    type: MARL_ALL_COMPLETED_TODO,
    
})




