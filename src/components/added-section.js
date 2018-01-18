import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
        this.getDisplayMessage = this.getDisplayMessage.bind(this);
    }

    getDisplayMessage(){
        if(this.props.hasError){
            return(
                <p>Entity '{this.props.field}' already exists </p>
            )
        }
        return (
            <p> Added: {this.props.field}</p>
        )
    }

    render(){
        if(this.props.field == ""){
            return (this.props.field);
        }
        return(
            <div>
                {this.getDisplayMessage()}
            </div>
        );
    }
};

