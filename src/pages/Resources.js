import react from 'react'
import {Navbar} from '../components/nav/Navbar'
import '../App.css'

import blogs from './blog/posts/blogs';
export const Resources = () => {
    return (
        <>
            <div className='App'>
                <Navbar/>
                <div>
          
           
          <div className="container">
          <p className='skillsText' style={{fontSize: '3vw'}}>
                  Resources
              </p>
              <div className='skillsHolder'>
              { 
                 /* blogs.map((item) => {
                      return (
                          <Project projectName={item.projectName} projectDesc={item.projectDesc} projectUrl={item.projectUrl} projectImg={item.projectImg}/>
                      )
                  })*/
              }
              </div>
          </div>  
      
  </div>
            </div>
        </>
    )
}