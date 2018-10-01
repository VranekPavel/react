import React from "react";

class Button extends React.Component{
    handleClick(){
        this.props.click()

    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;