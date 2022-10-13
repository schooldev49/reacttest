import React, { useState, useEffect } from 'react';



export class PersonClass extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name; 
      this.lastName = props.lastName
      this.isAnonymous = props.isAnonymous
      this.state = {isAnonymous: props.anonymous}
    }
    setAnonymous(status){
      this.setState({isAnonymous: status})
    }
    render(){
      return (
        <>
        <h1>First Name: {this.state.isAnonymous == !1 ? this.name : "Anonymous"}</h1>
        <h1>Last Name: {this.state.isAnonymous == !1 ? this.lastName : "Anonymous"}</h1>
        </>
      )
    }
  }