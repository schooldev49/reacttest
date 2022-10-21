import React, {useContext, useState, useId} from 'react'

const ExampleContext = React.createContext();
const ListItemObj = (props) => {
    const {id, name} = props
    const neededStuff = useContext(ExampleContext)
    console.log(neededStuff)
    return (
        <div className='item' key={id}>
            <h2>{name}</h2>
            <button onClick={() => neededStuff.remove.removeItem(id)}>Remove</button>
        </div>
    )
}

const ContextList = (props) => {
    const [list, setList] = useState([])
    const removeItem = (id) => {
        setList((listItems) => {
            return list.filter((listItem) => listItem.id != id)
        })
    }
    const addList = (name, id) => {
      

        setList([
                ...list, 
            {
                name: name,
            id: id
            }
            
        ])
        
    }
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
    return (
        
        <ExampleContext.Provider value={{remove: {removeItem}, list: list}}>
            <button onClick={() => addList('Example',getRandom())}>add</button>

            {
                list.map((listIt, index) => {
                    const name = listIt.name 
                    const id1 = listIt.id
                    return (
                        <ListItemObj name={name} id={id1} remove={removeItem}/>
                    )
                })
            }
        </ExampleContext.Provider>
        
    );
}



export default ContextList