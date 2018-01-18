import React, {Component} from 'react';

import PostField from './post-section';
import ListField from './list-section';
import AddedField from './added-section';

export default class App extends Component{

    constructor(props){
        super(props);
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: "",
            list: [],
            listObject: {},
            hasError: false
        };
    }

    reset(){
        this.setState({
            post: "",
            list: [],
            listObject: {},
            hasError: false
        })
        console.log(this.state);
    }

    handleSubmit(e){
        if(!this.state.listObject[e]){
            this.state.listObject[e] = true;
            this.state.list.push(e);
            this.setState(
                {
                    post:e,
                    hasError: false
                }
            )
        }
        else{
            this.setState(
                {
                    hasError: true
                }
            )
        }
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    reset={this.reset}
                />
                <AddedField field={this.state.post} hasError={this.state.hasError}/>
                <ListField  myArray = {this.state.list}/>
            </div>
        );
    }
};