import React from "react";

import { Button } from './Button';


export class Login extends React.Component { 
    constructor(props){
        super(props)
        
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        let loggedIn = localStorage.getItem('log') || localStorage.setItem('log',false)
        loggedIn = localStorage.getItem('log')
        let user = localStorage.getItem('user') || 'null'
        return (
            <>
                {
                    loggedIn == true ? <h1>Hello, {user}!</h1> : <Button>login</Button>
                }
            </>
        )
    }
}