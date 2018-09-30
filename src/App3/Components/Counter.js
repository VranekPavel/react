import React from "react";
import Item from "./Item";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counts: 0,
        }
    }
    handleClick(){
       this.setState ({
           counts: this.state.counts + 1,
       });
    }
    render (){
        return (
            <div>
                <p className={"counter-value"}>{this.state.counts}</p>
                <Item
                    class={"button"}
                    value={"Přidat 1"}
                    onClick={() => this.handleClick()}
                />
            </div>
        );
    }
}



export default Counter;