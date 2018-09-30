import React from "react";

class Checkbox extends React.Component{
    checkChange(event){
        this.props.change(event.target.checked)
    }
    render() {
        return (
            <input type={"checkbox"} defaultChecked={this.props.checked} onChange={(event) => this.checkChange(event)}/>
        );
    }
}

export default Checkbox;