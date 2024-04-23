import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resettodo, addtodo } from '../Features/Todoslice'
import { useCallback } from 'react'

function Header() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const Handledispatch = useCallback((e) => {
        e.preventDefault()
        if (text.trim() !== '') {
            dispatch(addtodo(text))
            setText('')
        }
        return
    }, [text, dispatch])

    const handleReset = useCallback(() => {
        dispatch(resettodo())
    }, [dispatch])





    return (
        <div style={{ display: "flex" }}>
            <form onSubmit={Handledispatch}>
                <input value={text} onChange={(e) => setText(e.target.value)}></input>&nbsp;&nbsp;
            </form>

            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Header
