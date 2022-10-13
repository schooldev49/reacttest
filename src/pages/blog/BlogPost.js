import React, {useState} from 'react'
//import fs from 'fs'
import { Blogs } from './posts/blogs'
import {useParams, Navigate} from 'react-router-dom'
//import listReactFiles from 'list-react-files'

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
}