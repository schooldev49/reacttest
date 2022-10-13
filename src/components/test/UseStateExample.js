import React, {useState} from 'react'

export const UseStateExample = () => {
    const [getVar1, setVar1] = useState('Hello world')

    return (
        <>
        {getVar1 == 'Hello world' ? (<h1>no</h1>) : (
            <h1>hi</h1>
        )
        }   
        </>
    )
}