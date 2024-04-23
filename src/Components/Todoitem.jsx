import React from 'react'
import { useSelector } from 'react-redux'

function Todoitem() {
    const todo = useSelector(state => state.todo)
    return (
        <div>
            {
                todo.map((todoitem) => {
                    return <div key={todoitem.id} style={{ display: "flex" }}>
                        <h1> {todoitem.name}</h1> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button>Edit</button>&nbsp;&nbsp;
                        <button>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default Todoitem
