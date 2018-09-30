import React from "react";
import Item from "./Components/Item";

class ToDoList extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            list: ["Vykouřit marihuanu", "Udělat domácí úkol na prvouku", "udělat dobrý skutek"],
            checked: [true, false, false],
        }
    }

    changeCheck(val, key){
        let array = this.state.checked.slice();
        array[key] = val;
        this.setState({
            checked: array,
        })
    }

    render(){
        return(
            <div>
                <h1>To do list!</h1>
                {this.state.list.map((item, i) => <Item key={i} item={[item, i]} change={(val, i) => this.changeCheck(val, i)} checked={this.state.checked[i]} />)}
            </div>
        );
    }
}

export default ToDoList;