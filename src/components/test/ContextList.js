import React, {useContext, useState} from 'react'

const ExampleContext = React.createContext();
const ListItemObj = (id, name) => {
    const neededStuff = useContext(ExampleContext)

    return (
        <div className='item' key={id}>
            <h2>{name}</h2>
            <button onClick={() => neededStuff.remove(id)}>Remove</button>
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
        console.log(list)
        console.log(...list)


        setList({
            name: name,
            id: id
        })
        console.log(list)
        
    }
    return (
        
        <ExampleContext.Provider value={{remove: {removeItem}, list: list}}>
            <button onClick={() => addList('hi')}></button>

            {
                list.map((listIt, index) => {
                    const name = listIt.name 
                    return (
                        <ListItemObj name={name} id={index} remove={removeItem}/>
                    )
                })
            }
        </ExampleContext.Provider>
        
    );
}



export default ContextList