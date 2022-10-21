import React from 'react';
import { Link } from 'react-router-dom';
export const NavbarItem = (props) => {
   return (
    <>

        {props.id && props.id == 'active' ? (
            <Link className='navLink' id='active' to={props.link} key={props.key}>{props.children}</Link>

        ) : (
            <Link className='navLink' to={props.link} key={props.key}>{props.children}</Link>
        )
}
    </>
   ) 
}