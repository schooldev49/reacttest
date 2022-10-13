import React, { useState, useEffect, useRef, useId, useReducer } from "react";
import { Button } from './Button'
const Defaults = {
    list: [],
    name: 'N/A',
    id: 'N/A',
    subject: 'N/A',
    dateDue: 'N/A'
}
const reducer = (state, action) => {
    switch(action.type) {
        /*
         let Newe = list.filter((item) => item.id !== id);
        setList(
            Newe
        )*/ 
        case 'ADD_LIST':
            return {
                ...state,
                list: [
                    ...state.list, 
                    {
                        id: action.payload.id,
                        name: action.payload.name, 
                        subject: action.payload.subject,
                        dateDue: action.payload.dateDue
                    }
                ]
            }
        case 'REMOVE_LIST':
            const newList = state.list.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                list: newList
            }
        case 'EDIT_VALUE':
            return {
                ...state, 
                [action.payload.instance]: action.payload.value
            }
        default:
            // return default in case something else triggers it?
            return state
    }
}
export const Todo = (props) => {
    const [state, dispatch] = useReducer(reducer,Defaults)
 //   const [list,setList] = useState(props.list)
    console.log(props.list)
  //  const [name, setName] = useState('N/A')
 //   const [id, setId] = useState('N/A')
   // const [subject, setSubject] = useState('N/A')
   // const [dateDue, setDateDue] = useState('N/A')
     //   this.state = {list: props.list, id: '', name: '', subject: '', dateDue: ''};
    //    this.handleSubmission = this.handleSubmission.bind(this);
      //  this.myRef = React.createRef();
    
   
    const handleSubmission = (e) => {
        e.preventDefault();
        const getRandom = () => {
           let result = '';
           const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
           const charactersLength = characters.length;
          for (let i=1; i<10; i++){
           result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
          }
           
           return result;
         }
       let eqi = getRandom()
      dispatch({
        type: 'EDIT_VALUE',
        payload: {
            instance: 'id',
            value: eqi
        }
      })
        
       
       
       dispatch({
        type: "ADD_LIST",
        payload: {
           id:  state.id,
            name: state.name, 
            subject: state.subject, 
            dateDue: state.dateDue
           
        }
        })
    
       
    }
  
    const removeItem = (id) => {
      /*  let Newe = list.filter((item) => item.id !== id);
        setList(
            Newe
        )*/
        dispatch({
            type: 'REMOVE_LIST',
            payload: {
                id: id
            }
        })
    }
  
    const handleChange = (e) => {
        /*
        const name = e.target.name
        const value = e.target.value
        this.setState({
            ...this.state.list,
            [name]: value
        })
        */
    }
   
    /*  useEffect(() => {
           
        }, [this.state.list])*/
        return (
            <>
                <section className='Todo'>
                    <h1 style={{color: 'white'}}>To Do List</h1>
                    <div className='TodoContainer'>
                        {
                            
                            state.list.map((listItem) => {
                                const { id, name, subject, dateDue} = listItem;
                                console.log(id,name,subject,dateDue)
                                return (
                                  <>
                                    <div key={id} className="todoDivs" onClick={() => {
                                        removeItem(id)
                                    }}>
                                        <h2>{subject}</h2>
                                        <p>{name} is due on {dateDue}</p>
                                    </div>
                                  </>
                                )
                            })
                        }
                    
                    </div>
                    <form className='todoform' onSubmit={handleSubmission}>
                        <input type='text' placeholder="Enter the task name" aria-required onChange={(e) => {
                            dispatch({
                                type: 'EDIT_VALUE',
                                payload: {
                                    instance: 'name',
                                    value: e.currentTarget.value.trim()
                                }
                                
                            })
                        }}/>
                        <input type='text' placeholder="Enter the task subject" aria-required onChange={(e) => {
                             dispatch({
                                type: 'EDIT_VALUE',
                                payload: {
                                    instance: 'subject',
                                    value: e.currentTarget.value.trim()
                                }
                                
                            })
                        }}/>
                        <input type='text' placeholder="Enter the due date (or make one for yourself)" aria-required onChange={(e) => {
                            dispatch({
                                type: 'EDIT_VALUE',
                                payload: {
                                    instance: 'dateDue',
                                    value: e.currentTarget.value.trim()
                                }
                                
                            })
                        }
                        }/>
                        <button type='submit'>Create Task</button>
                    </form>
                </section>
            </>
        )
      
    
}