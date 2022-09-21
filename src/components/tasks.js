import React, { Component } from 'react';

const url = "localhost:8900/data"

class Tasks extends Component {
    constructor(props){
        super(props)

        this.state={
            tasks:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>Tasks</h1>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            Method:'GET'})
        .then((res) => res.json())  
        .then((post) =>{
            this.setState({tasks:post})
        })  
    }
}


export default Tasks
