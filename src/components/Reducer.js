import React, { useReducer, useState } from 'react'
import {Modal} from './Modal'
const defaults = {
    isOpen: false,
    type: 'N/A', 
    text: "N/A"
}
const reducer = (state, action) => {
    console.log(action.payload + "d")
    switch(action.type){
        
        case 'CREATE_MSG': 
            return {
                ...state,
                isOpen: true, 
                type: action.type,
                text: action.payload

            }
        case 'CLEAR_MSG': 
            return {
                ...state, 
                isOpen: false,
                type: "N/A",
                text: "N/A"
            }
        default: 
            console.warn("Invalid type at Reducer.js")
            return state;
    }
}

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, defaults)
    const buttonHandler = (e) => {
        dispatch({type: 'CREATE_MSG', payload: 'SUCCESS'})
    }
    const closeModal = () => {
        dispatch({type: 'CLEAR_MSG'})
    }
    return (
        <>            
        {state.isOpen && <Modal text={state.text} type={state.text} closeModal={closeModal}/>}

            <button style={{width:'35px', height:'35px', marginBottom:"5px"}} onClick={buttonHandler}>NEW</button>
            <br></br>
        </>
    )
}