import React from "react";

export class ListTest extends React.Component { 
    constructor(props){
        super(props)
        // insert list
        this.state = {list: props.list}
    }
    componentDidMount(){


    }
    componentWillUnmount(){

    }

    render() {
        return(
            <>
                <button onClick={() => {
                    console.log('clicked??')
                    let e = this.state.list[this.state.list.length - 1] + 1
                console.log(e + "esio")    
                this.setState({
                   list: [
                        ...this.state.list,
                        e
                   ]
                })
                  //  this.state.list.push(this.list[this.state.list.length - 1] + 1)
                }}>add 1</button>
                <p>
                    {this.state.list.map((listItem) => {
                        console.log(listItem)
                        if (this.state.list[this.state.list.length - 1] == listItem){
                            return listItem 
                        } else {
                            return listItem + " , "
                        }
                    })}  
                </p>
            </>
        )
    }
}