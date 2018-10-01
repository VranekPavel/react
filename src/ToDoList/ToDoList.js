import React from "react";
import Item from "./Components/Item";
import Button from "./Components/Button"

class ToDoList extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            list: ["Vykouřit marihuanu", "Udělat domácí úkol na prvouku", "udělat dobrý skutek"],
            checked: [true, false, false],
            newItem:"",
        }
    }

    changeCheck(val, key){
        let array = this.state.checked.slice();
        array[key] = val;
        this.setState({
            checked: array,
        })
    }

    renderItem(item, i){
        return(
            <Item
                key={i}
                item={[item, i]}
                change={(val, i) => this.changeCheck(val, i)}
                checked={this.state.checked[i]}
            />
        );
    }

    handleAddClick(){
        let list = this.state.list.slice();
        let checked = this.state.checked.slice();
        list.push(this.state.newItem);
        checked.push(false);
        this.setState({
            list:list,
            checked:checked,
        })
    }

    handleRemoveClick(){
        let list = this.state.list.slice(0, this.state.list.length - 1);
        let checked = this.state.checked.slice(0, this.state.list.length - 1);
        this.setState({
            list:list,
            checked:checked,
        })
    }

    newVal(event){
        this.setState({
            newItem: event.target.value,
        })
    }


    render(){
        return(
            <div>
                <h1>To do list!</h1>
                <input onChange={(event) => this.newVal(event)}/>
                <Button click={() => this.handleAddClick()} name={"Add item"}/>
                <Button click={() => this.handleRemoveClick()} name={"Remove item"}/>
                {this.state.list.map((item, i) =>  this.renderItem(item, i))}
            </div>
        );
    }
}

export default ToDoList;