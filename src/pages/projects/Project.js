import React from 'react'
import { Navigate } from 'react-router-dom'
import { Projects } from '../Projects'



export const Project = (props) => {
    let {projectName, projectDesc, projectUrl, projectImg} = props;

/*
 <div className='project' id='https://example.com' onClick={(e) => {
                            console.log(e.target.id)
                        }}>
                        <img className='projectImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/768px-Circle_%28transparent%29.png'/>   
                        <p className='projectText1'>
                            Project Name
                        </p>
                        <p className='projectText2'>
                            A detailed description about the project
                        </p>
                        
                        </div>
*/ 

projectImg = projectImg ? projectImg : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/768px-Circle_%28transparent%29.png'
    return <>
         <a className='project' id={projectUrl} href={projectUrl} onClick={(e) => {
                            console.log(e.target.id)
                        }}>
                        <img className='projectImg' src={projectImg}/>   
                        <p className='projectText1'>
                            {projectName}
                        </p>
                        <p className='projectText2'>
                          {projectDesc}
                        </p>
                        
            </a>
    </>
}