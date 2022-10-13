import React, { useState, useEffect } from 'react';

export const Proxy = () => {
    const handleSubmission = (event) => {
      event.preventDefault()
  
    }
    return (
  
    <div className="search">
    <form onSubmit={handleSubmission}>
      <input
        type='text'
        placeholder='Enter a URL'
      ></input>
      <br></br>
      <button
        type='submit'
      >Visit</button>
    </form>
  </div>
  
    )
  }