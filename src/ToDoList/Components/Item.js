import React from "react";
import Checkbox from "./Checkbox";

class Item extends React.Component{
    checkState(value){
        this.props.change(value, this.props.item[0]);
    }
    render(){
        return(
            <div>
                <Checkbox  checked={this.props.checked} change={(val) => this.checkState(val)}/>
                <p>{this.props.item[1]}</p>
            </div>
        );
    }
}

export default Item;