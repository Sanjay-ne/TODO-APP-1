import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [{
        id: 0,
        name: "Add todo items"

    }]
}

const Todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const newTodo = {
                id: state.todo.length,
                name: action.payload
            };
            state.todo.push(newTodo)
        },

        resettodo: (state) => {
            state.todo = initialState.todo
        }

    }
})

export const { addtodo, resettodo } = Todoslice.actions
export default Todoslice.reducer