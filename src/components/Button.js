import React from "react";

export class Button extends React.Component {
    constructor(props){
        super(props);
        this.buttonClass = props.buttonClass || "defaultButton"
    }
    render(){
        return(
            <>
                <button className={this.buttonClass}>{this.props.children}</button>
            </>
        )
    }
}