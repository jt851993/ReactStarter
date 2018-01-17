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
            listObject: {}
        }
    }

    reset(){
        this.setState(
            {
                post: "",
                list:[],
                listObject: {}
            }
        )
    }

    handleSubmit(e){
        if(!this.state.listObject[e]){
            this.state.listObject[e] = true;
            this.state.list.push(e);
            this.setState(
                {
                    post:<p>Added {e}</p>
                }
            )
        }
        else{
            this.setState(
                {
                    post:<p>Element {e} already exists</p>
                }
            )
        }
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    reset={this.reset}
                />
                <AddedField field={this.state.post}/>
                <ListField  myArray = {this.state.list}/>
            </div>
        );
    }
};