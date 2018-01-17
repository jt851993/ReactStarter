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
            list: []
        }
    }

    reset(){
        this.setState(
            {
                post: "",
                list:[]
            }
        )
    }

    handleSubmit(e){
        this.state.list.push(e);
        this.setState(
            {
                post:e
            }
        )
    }

    addAddedField(){
        if(this.state.post != "")
        {
            return <AddedField field={this.state.post}/>
        }
        return ""
    }

    addListField(e){
        if(this.state.list != "")
        {
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
                    myArray = {this.state.list}
                />
                {this.addAddedField()}
                {this.addListField()}
            </div>

        );
    }
};