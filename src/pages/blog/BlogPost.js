import React, {useState} from 'react'
//import fs from 'fs'
import Blogs from './posts/blogs'
import {useParams, Navigate, useNavigate} from 'react-router-dom'
import {Navbar} from '../../components/nav/Navbar'
import { NavbarItem } from '../../components/nav/NavbarItem'
//import listReactFiles from 'list-react-files'
const BlogPost = () => {
    let use = useParams();
    console.log(use.postId,use.postName)
    let id = use.postId
    var bloge;
    Promise.all(Blogs.map((blog) => {
        if (blog.id == id){
           bloge = blog; 
        } 
    }))

    return (
        <>
        
            <div className='App'>
            
                <Navbar/>
                <div className='container'>
                    {
                    bloge && bloge.title && bloge.content ? ( 
                        <><h2 className="nomargin">{bloge.title}</h2><img src={bloge.image} style={{margin: '5px', height: '15vw', width: '15vw'}}/><p className="nomargin">{bloge.content}</p></>
                    ) : (
                        <Navigate to='/blog/' replace/>
                    )
                    }
                </div>
            </div>
        </>
    )
}
export default BlogPost;









//import listReactFiles from 'list-react-files'
/*
const getFile = (file) => {
    //const fileq = []
//  listReactFiles(__dirname).then(files => fileq = files)
    return true;
}
export const BlogPost = () => {
  //  const currentBlog = useState<{file: [] | Array}>({file: []})
    const currentBlog = useState<{blog: "" | String}>({blog: ""})
    let use = useParams();
    console.log(use.postId,use.postName)
    let id = use.postId
    let name = use.postName
    
    return (
        <>
           {
            getFile(id) ? (
                 <h1>the name of blog is {name}</h1> 
                 ) : (
                
                <Navigate to='/blog/' replace/>
            )
           }
        </>
    )
}*/