import React from "react";
import Item from "./Components/Item";
import Button from "./Components/Button"

class ToDoList extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            list: [[0, "Vykouřit marihuanu", true], [1, "Udělat domácí úkol na prvouku", false], [2, "udělat dobrý skutek", false]],
            newItem:"",
        }
    }

    changeCheck(val, key){
        let array = this.state.list.slice();
        array[key][2] = val;
        this.setState({
            checked: array,
        })
    }

    renderItem(item){
        return(
            <div key={item[0]}>
                <Item
                    item={item}
                    change={(val, i) => this.changeCheck(val, i)}
                    checked={item[2]}
                />
                <Button click={() => this.handleRemoveClick(item)} name={"Remove item"}/>
            </div>
        );
    }

    handleAddClick(){
        let list = this.state.list.slice();
        list.push([this.state.list.length, this.state.newItem, false]);
        this.setState({
            list:list,
        })
    }

    handleRemoveClick(i){
        console.log(i)
        let list = this.state.list.slice();
        let position = list.indexOf(i);
        console.log(position);
        list.splice(position, 1);
        this.setState({
            list:list,
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
                {this.state.list.map((item) =>  this.renderItem(item))}
            </div>
        );
    }
}

export default ToDoList;