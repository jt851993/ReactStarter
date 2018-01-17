import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.field == ""){
            return (this.props.field);
        }
        return(
            <div>
                {this.props.field}
            </div>
        );
    }
};

