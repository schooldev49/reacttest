import React, { useState, useEffect } from 'react';

export const AlphabetTest = (props) => {
    const [alphabet, setAlphabet] = useState('a');
    
    const getRandom = () => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
     
      result = characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      
      return result;
    }
    useEffect(() => {
      setAlphabet("Add a letter: a");
    },[])
    return (
      <>
         <button onClick={() => setAlphabet((currentAlphabet) => currentAlphabet + getRandom())}>add a letter</button>
         <h2>{alphabet}</h2>
      </>
    )
  }