import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav: ["Home", "Products", "Settings", "Log In"]
        }
    }
    handleClick(i){
        this.props.changeActive(this.state.nav[i])
    }

    renderItem(item, i){
        return(
                <Item
                    key={i}
                    value={item}
                    class={"nav-item"}
                    onClick={() => this.handleClick(i)}
                />
        );
    }
    render(){
        return(
            <div id={"nav"} >
                {this.state.nav.map((item, i) => this.renderItem(item, i))}
            </div>
        );
    }
}


export default Nav;