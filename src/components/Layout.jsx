import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './nav/Navbar'
import '../App.css';
export const Layout = () => {
    return (
        <>
        <Outlet/>
        </>
    )
}