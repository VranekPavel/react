import React from 'react';
import './App.css';

function Square (props){
    return (
        <button className={"square"} onClick={props.onClick}>{props.value}</button>
    );
}

class Board extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    renderSquare (i){
        return (
            <Square
                value = {this.state.squares[i]}
                onClick = {() => this.handleClick(i)}
            />
        );
    }
    handleClick(i){
        const array = this.state.squares.slice();
        array[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: array,
            xIsNext: !this.state.xIsNext,
        });
    }
    render (){
        const status = "Next play: " + (this.state.xIsNext ? "X": "O");
        return (
            <div>
                <div>{this.props.name}</div>
                <div className={"board-info"}>{status}</div>
                <div className={"board-row"}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={"board-row"}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game1 extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board name={"Piškvory"}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================





export default Game1;