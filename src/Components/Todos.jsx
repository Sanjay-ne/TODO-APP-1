import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import Header from './Header';


function Todos() {


    return (

        <>
            <Header></Header>
            <Todoitem></Todoitem>
        </>
    )
}

export default Todos
