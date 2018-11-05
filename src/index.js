import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import logo from './logo.svg';
import './index.css';
import Game1 from './App2.js';
import App3 from "./App3/App3";
import ToDoList from "./ToDoList/ToDoList";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';


class Root extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <BrowserRouter>
                    <div className={"content"}>
                        <nav>
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/app2">Piškvorky</NavLink>
                            <NavLink to="/app3">Nákupní seznam</NavLink>
                            <NavLink to="/toDoList">toDoList</NavLink>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/app2" component={Game1}/>
                            <Route path="/app3" component={App3}/>
                            <Route path="/toDoList" component={ToDoList}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

class Home extends React.Component{
    render(){
        return(
            <div>
                <Tooltip placement={"top"} trigger={["hover"]} overlay={<span>Vaše osobní údaje zpracováváme především za účelem vyřízení Vaší objednávky a za účelem doručení zboží, případně za účelem poskytnutí doplňujících služeb (např. pojistných či splátkových produktů). Nevyslovíte-li námitku proti zpracování osobních údajů za účelem zasílání obchodních sdělení, budeme Vaše osobní údaje zpracovávat také pro tyto účely. Více informací o zpracování Vašich osobních údajů a zejména o Vašich právech souvisejících se zpracováním se dozvíte v Zásadách ochrany osobních údajů. Přečíst si je můžete v tomto odkazu.</span>}>
                    <h1>This is home page</h1>
                </Tooltip>
                <p>Shit is here</p>
                <p>To switch to another pages use navigation.</p>
            </div>
        );
    }
}

class Error extends React.Component {
    render(){
        return(
            <div>
                <p>This page does not exist</p>
            </div>
        );
    }
}
// ========================================
ReactDOM.render(<Root/>,
    document.getElementById("root"));

registerServiceWorker();

