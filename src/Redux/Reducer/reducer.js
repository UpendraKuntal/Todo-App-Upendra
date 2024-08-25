import { ADD_TODO, FILTER_TODO, MARK_COMPLETE_TODO, MARK_INCOMPLETE_TODO, MARL_ALL_COMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "../Action/actionTypes"

const initialState={
    todos:[],
    filter:'All',
    search:''
}

const todoReducer=(state = initialState,action) =>{
    switch(action.type){
        case ADD_TODO:
            return{
                todos:[...state.todos,{
                    text:action.payload.text, completed: false,
                    date:action.payload.date
                }],
                filter: state.filter,
                search: state.search
            }
        case TOGGLE_TODO:
            return{
                todos:state.todos.map((todo,index)=>index === action.payload.id?
                {...todo,completed:!todo.completed} : todo
                ),
                filter: state.filter,
                search: state.search

            }
            case REMOVE_TODO:
            return{
            todos:state.todos.filter((todo,index)=>index !== action.payload.id
            ),
            filter: state.filter,
            search: state.search

        }
        case MARK_COMPLETE_TODO:
            return{
                todos: state.todos.map((todo,index)=>
                index === action.payload.id?
                {...todo, completed: true} : todo
                ),
                filter: state.filter,
                search: state.search

            }
        
         case MARK_INCOMPLETE_TODO:
            return{
                todos: state.todos.map((todo,index)=>
                index === action.payload.id?
                {...todo, completed: false} : todo
                ),
                filter: state.filter,
                search: state.search

            }
         case FILTER_TODO:
            return{
                todos: state.todos,
                filter: action.payload.filter,
                search: state.search

            }
        case SEARCH_TODO:
            return{
                todos: state.todos,
                filter: state.filter,
                search: action.payload.search

            }
         case MARL_ALL_COMPLETED_TODO:
            return{
                todos: state.todos.map((todo)=>
                ({
                    ...todo,completed: true
                })
                
                ),
                filter: state.filter,
                search: state.search

            }
            default: 
            return state;
        }

        
}
export default todoReducer