import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.listName
        }
    }
    componentWillMount(){
        console.log("Component will mount");
    }
    componentDidMount(){
        console.log("Component did mount");
    }
    componentWillReceiveProps(newProps){
        console.log("Component will receive props", newProps);
    }
    shouldComponentUpdate(newProps,nextState){
        console.log("Should component update?", newProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Component will update",nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    changeName(){
        this.props.change(this.state.name)
    }
    changeState(event){
        this.setState({
            name: event.target.value,
        })
    }
    render (){
        return(
            <div className={"header"} >
                <input defaultValue={this.props.listName} onChange={(event) => this.changeState(event)}/>
                <button onClick={() => this.changeName()} className={"button"}>{this.props.name}</button>
                {this.props.children}
            </div>
        );
    }
}


Header.propTypes ={
    defaultValue: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    listName: PropTypes.string,
}

export default Header;