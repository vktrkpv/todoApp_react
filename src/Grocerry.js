import { Component } from "react";

export class GroceryList extends Component {

    state = {
        userInput: "",
        groceryList: []

    }


    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input){
        let listArr = this.state.groceryList;
        listArr.push(input);
        this.setState({groceryList: listArr, userInput: '' }); 
        console.log(listArr)
    }

    render() {
        return(
            <div>
                <div>
                    <input type="text" placeholder="Add your grocery"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                    value={this.state.userInput}/>
                </div>

                <div>
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <ul>
                    {this.state.groceryList.map( (item, index) => {
                        <li key={index}>{item}</li>
                    })}
                   
                </ul>
            </div>
        )
    }
    
}