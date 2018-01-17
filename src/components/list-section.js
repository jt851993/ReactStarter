import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
        this.generateTableData = this.generateTableData.bind(this);
    }

    generateTableData(){
        return(
            this.props.myArray.map((element) =>
                <tr key={element + "row"}>
                    <td key={element}>{element}</td>
                </tr>
            )
        )
    }

    render(){
        if(this.props.myArray == ""){
            return (this.props.myArray);
        }
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Entries</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.generateTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
};

