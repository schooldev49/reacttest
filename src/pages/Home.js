//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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
import ReactDOM from 'react-dom';
import '../App.css';
import ContextList from '../components/test/ContextList'
import img from "../lol_prev_ui.png"

const programmingLanguages = [
  "C#",
  "ASM",
  "Frontend Web Development",
  "BASH/Linux",
  "C",
  "React",
  "C++",
]
export const Home = () => {
    const thename = "John";
    const trueorfalse = false;
  
    return (
      <div className="App">
        <Navbar/>

        <div className='containerImg'>
          <div className='imageText'>
          <h1 className='imageI'style={{fontWeight: 400, color: 'white'}}>Hi, I'm SimplyDeveloper<p style={{fontWeight: 100}}><br/><b>"a rock is living."</b><p style={{fontSize: '2vw'}}>- me 2022</p></p></h1>
          </div>
          <img className='mainImage' src={img}/>
        </div>
        <div style={{display: 'flex', flexFlow: 'row'}}>
            <div style={{float: 'left', width: '50vw'}}>
                <div className="skillsContainer" style={{height: '45vw'}}>
                    <div style={{textAlign: 'center', display: 'inline-block', height: '100%', margin: 0, verticalAlign: 'middle'}}>
                    <img style={{padding: '10px', width: '75%', verticalAlign: 'middle', transform: 'translateY(9vw)'}} src="https://skillicons.dev/icons?i=powershell,js,html,css,cpp,cs,c,nodejs,linux,nextjs,java,react,cloudflare,dotnet,git,github,lua,netlify,rust,blender,mysql,docker,regex,php,py,ts,vscode,visualstudio,wasm,ps&perline=5">

                    </img>
                   
                    </div>
                </div>
            </div>
            <div style={{float: 'right', width: '75vw'}}>
                <div className="skillsContainer" style={{height: '45vw'}}>
                    <p className='skillsText' style={{fontSize: '3vw'}}>
                        About Me
                    </p>
                    <p className='skillsText' style={{fontSize: '3vw', textDecoration: 'none'}}>
                        Hey there! I'm a middle schooler currently learning programming and it's really fun! (you should try it out :) I also enjoy various other topics such as Engineering, Design, and Quantum Physics.
                        
                        I know multiple modern programming languages such as C++, but also know many esoteric programming languages (just for fun.)
                    </p>
                    
                </div>  
            </div>
        </div>
        <p>ignore everything below this point (learning React)</p>
        <ContextList/>
        <h1>hello, {trueorfalse ? thename : 'Guest'}</h1>
        {thename ? (
          <>
          <h1><i>you have a name</i></h1>
          
          </>
        ): (
          <>
          <h1><i>you have no name??</i></h1>
          </>
        )
  
        }
        <Person name={'John'} lastName={'Doe'}/>
        <AlphabetTest/>
        <Reducer/>
        <SetReducerTest/>
        <Proxy/>
        <PersonClass name={'Proxy'} lastName={'Proxy lol'} isAnonymous={false}/>
        <Time/>
        <ListTest list={[1,2,3]}/>
        <Todo list={
          [
            
          ]
        }/>
        <Login/>
        
      </div>
    )
}