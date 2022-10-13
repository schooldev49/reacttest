import React, { useState, useEffect } from 'react';


export const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      
    </>
  )
}
