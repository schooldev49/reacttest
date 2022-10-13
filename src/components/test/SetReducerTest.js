import React, {useState, useReducer} from 'react'
const defaults = {
    isOpen: false,
    text: 'N/A'
}
const reducer = (state,action) => {
    if (action.type === 'MSGMODALOPEN') {
        return {...state, isOpen: true, text: action.text}
    } else if (action.type === 'MSGMODELCLOSE') {
        return {...state, isOpen: false, text: "N/A"}
    } else if (action.type === 'ALERT'){
        return {...state, isOpen: true, text: "ALERT!!!"}
    }
    return state;
}
export const SetReducerTest = () => {
    const [state, dispatch] = useReducer(reducer,defaults)


    return (
        <>
            {state.isOpen && <div className='modalHolder'><h2>{state.text}</h2></div>}
            <button style={{height: '50px', width: '50px'}}onClick={() => dispatch({type: 'MSGMODAL', text: 'Item added!'})}>Click</button>
        </>

    )
}