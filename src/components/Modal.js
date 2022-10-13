import React, {useReducer, useState, useEffect} from 'react'

export const Modal = (props) => {
   
    useEffect(() => {
        setTimeout(() => {
            props.closeModal()
        },4000)
    })
    return (
        <>
            <div className="modal">
                <h2>
                    {props.text.toString()}
                </h2>
            </div>
        </>
    )
}