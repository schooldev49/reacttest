//import logo from './logo.svg';
import React, { useState, useEffect, useContext } from 'react';
import { AlphabetTest } from '../components/test/AlphabetTest'
import { PersonClass } from '../components/test/PersonTest2';
import { Person } from '../components/test/PersonTest1'
import { Reducer } from '../components/Reducer'
import { Time } from '../components/test/Time'
import { Proxy } from '../components/Proxy'
import { Login } from '../components/Login'
import { Button } from '../components/Button'
import { ListTest } from '../components/test/ListTest'
import { Todo } from '../components/Todo'
import { SetReducerTest } from '../components/test/SetReducerTest'
import { Navbar } from '../components/nav/Navbar'
import AllProjects from './projects/AllProjects'
import { Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Project } from './projects/Project'
import '../App.css';


export const Projects = () => {
   // const thename = "John";
   // const trueorfalse = false;
  
    return (
      <div className="App">
        <Navbar/>

     
        <div>
          
           
                <div className="skillsContainer">
                <p className='skillsText' style={{fontSize: '3vw'}}>
                        Projects
                    </p>
                    <div className='skillsHolder'>
                    { 
                        AllProjects.map((item) => {
                            return (
                                <Project projectName={item.projectName} projectDesc={item.projectDesc} projectUrl={item.projectUrl} projectImg={item.projectImg}/>
                            )
                        })
                    }
                    </div>
                </div>  
            
        </div>
        
        
      </div>
    )
}