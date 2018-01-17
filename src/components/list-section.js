import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Entries</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.myArray.map((element) =>
                            <tr key={element + "row"}>
                                <td key={element}>{element}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
};

