import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Added: {this.props.field}</p>
            </div>
        );
    }
};

