
const initialState = {
    todoList: []
}

//? types
const ADD = "ADD";
const DEL = "DEL";
const CLR = "CLR";
const TGL = "TGL";

//! action creators

// export const addTodo = (text) => ({type:ADD,payload:text})
export const addTodo = (payload) => ({type:ADD,payload})
export const clearTodo = () => ({type:CLR})

export const todoReducer = (state= initialState,{type,payload}) => {
    switch (type) {
        case ADD:
            // return {...state,todoList: [...state.todoList,{text:payload,completed:false,id: new Date().getTime()}]}
            return {...state,todoList: [...state.todoList,{text:payload,completed:false,id: crypto.randomUUID()}]}
        case CLR:
            // return initialState
            return {...state,todoList:[]}
        default:
            return state //* olmayan bir type bilgisi geldiğinde de statei olduğu gibi döndürmelidir.
    }
}
