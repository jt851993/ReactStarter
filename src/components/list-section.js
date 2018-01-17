import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    <table>
                        <tr>
                            <th>Entries</th>
                        </tr>
                        {this.props.myArray.map((element) =>
                            <tr><td key={element}>{element}</td> </tr>
                        )}
                    </table>
                </ul>
            </div>
        );
    }
};

