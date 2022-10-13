import React, {useState, useEffect, useReducer} from 'react'
import { NavbarItem } from './NavbarItem'
//const defaults = [
    //isActive = false,
//]
const sections = [
   {
    title:  "Home",
    url: `/`
   },
   {
    title: "Projects",
    url: `/projects/`
   },
   {
    title: "Resources",
    url: `/resources/`
   },
   {
    title: "Blog",
    url: `/blog/`
   }
]
/*
const reducer = (state, action) => {
    switch(action.type){
        case 'SET_ACTIVE':
            let e = ''
            return {
                isActive: true
            }
    }
}*/
export const Navbar = () => {
    //const [state, dispatch] = useReducer(reducer,defaults)
    return <>
        <nav className='navbarHolder'>
            <div className='navbar' key='nav'>
                
                <ul className='holderNavs'>
                    {
                      sections.map((item, index) => {
                        
                        if (item.url == window.location.href) {
                            return (
                                <>
                                <NavbarItem link={item.url} key={index} id='active'>{item.title}</NavbarItem>
                                </>
                            )
                        } else {
                            return (
                                <>
                                <NavbarItem link={item.url} key={index}>{item.title}</NavbarItem>
                                </>
                            )
                        }
                       
                        })
                    }
                </ul>
            </div>
        </nav>
    </>
}