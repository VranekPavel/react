import React from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Counter from "./Components/Counter";
import Nav from "./Components/Nav"
import "./App3.css";



class App3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Shooping List",
            header: true,
            activeNav:"Home"
        }
        console.log("Constructor");
    }

    changeName(newName){
        this.setState({
            name: newName
        })
    }
    changeActive(newVal){
        this.setState({
            activeNav: newVal,
        })
    }

    changeHeaderState(){
        this.setState({
            header: !this.state.header,
        })
    }
    render(){
        const shoopingList = ["Milk", "Sugar", "Limonade"];
        const productList = ["PC", "Waklman", "Stereo"]
        let header, home, product, setting, logIn = "";

        if (this.state.header){
            header = (
                <Header listName={this.state.name} change={this.changeName.bind(this)} name={"Tlačidlo"} >
                    <Nav changeActive={this.changeActive.bind(this)}/>
                </Header>
            )
        }
        switch (this.state.activeNav) {
            case "Home":
                home = <List name={this.state.name} list={shoopingList} />;
                break;
            case "Products":
                product = <List name={"Product List"} list={productList}/>;
                break;
            case "Settings":
                setting =<Counter/>;
                break;
            case "Log In":
                logIn = <Counter/>
                break;
        }

        return (
            <div>
                <button onClick={this.changeHeaderState.bind(this)}>(Un)mount header component</button>
                {header}
                <div>
                    {home}
                    {product}
                    {setting}
                    {logIn}
                </div>

            </div>
        );
    }
}

export default App3;