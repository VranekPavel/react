import React from "react";
import Item from "./Item";
import Counter from "./Counter";
import PropTypes from "prop-types";


class List extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            item:this.props.list
        }
    }
    handleClick(i){
        const item = this.state.item[i];
        alert("clicked element with value " + item);
    }
    renderItem (item, i){
        return (
            <Item
                class={"list"}
                value = {item}
                onClick = {() => this.handleClick(i)}
            />
        );
    }
    render (){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <ul className={"list"}>
                    {this.state.item.map((item, i) => <li key={i}>{this.renderItem(item, i)}<Counter /></li>)}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
}

export default List;