import React, { useState, useEffect } from 'react';

export const Time = () => {
    const [date, setDate] = useState(new Date());

      //  constructor(props){
    /*    super(props)

        this.state = {date: new Date(), time: 0};

    }
    componentDidMount(){
        this.startTime = new Date() * 1;

        this.tester = setInterval(
            () => this.tick(),
        1000)
    }
    componentWillUnmount(){
        clearInterval(this.tester);
    }*/
  /*  tick() {
        
        this.setState({
            date: new Date(),
            time: (new Date() * 1) / 1000 - this.startTime
        })

    }*/
   
        return (
            <>
                <h1>The time is: {date.toLocaleTimeString()}</h1>
            </>
        )
}
