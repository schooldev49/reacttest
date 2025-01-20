import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';
export const Layout = () => {
    return (
        <>
        <Outlet/>
        </>
    )
}