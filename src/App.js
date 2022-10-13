//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
/*import { AlphabetTest } from './components/test/AlphabetTest'
import { PersonClass } from './components/test/PersonTest2';
import { Person } from './components/test/PersonTest1'
import { Reducer } from './components/Reducer'
import { Time } from './components/test/Time'
import { Proxy } from './components/Proxy'
import { Login } from './components/Login'
import { Button } from './components/Button'
import { ListTest } from './components/test/ListTest'
import { Todo } from './components/Todo'
import { SetReducerTest } from './components/test/SetReducerTest'
import { Navbar } from './components/nav/Navbar'*/
import { Home } from './pages/Home'
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route, useRoutes, useParams } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Projects } from './pages/Projects'
import { Resources } from './pages/Resources'
import { Blog } from './pages/blog/Blog'
import { NotFound } from './pages/NotFound'
import { BlogPost } from './pages/blog/BlogPost'
const App = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' index element={<Home/>}/>
          <Route path='/projects/' element={<Projects/>}/>
          <Route path='/resources/' element={<Resources/>}/>
          <Route path='/blog/' element={<Blog/>}/>
          <Route path='/blog/:postId/:postName' element={<BlogPost/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
export default App;
