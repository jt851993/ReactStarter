import React, {Component} from 'react';

import PostField from './post-section';
import ListField from './list-section';
import AddedField from './added-section';

export default class App extends Component{

    constructor(props){
        super(props);
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addAddedField = this.addAddedField.bind(this);
        this.addListField = this.addListField.bind(this);
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

    addAddedField(){
        if(this.state.post != ""){
            return <AddedField field={this.state.post}/>
        }
        return ""
    }

    addListField(){
        if(this.state.list != ""){
            return <ListField  myArray = {this.state.list}/>
        }
        return ""
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    reset={this.reset}
                />
                {this.addAddedField()}
                {this.addListField()}
            </div>
        );
    }
};