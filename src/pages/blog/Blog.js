//import fs from 'fs'
import React from 'react'
import { Navigate } from 'react-router-dom';

import { Navbar } from '../../components/nav/Navbar'
import  '../../../src/App.css'
import BlogTile from './BlogTile'
import Blogs from './posts/blogs';

export const Blog = (props) => {
    return (
        <>
            <div className='App'>
            <Navbar/>
            <div className='container blogContain'>
            {
                Blogs.map((blog) => {
                    return <BlogTile blogTitle={blog.title} blogDate={blog.postDate} blogImage={blog.image} blogId={blog.id}/>
                })
            }
            </div>
            </div>
        </>
    )   
}