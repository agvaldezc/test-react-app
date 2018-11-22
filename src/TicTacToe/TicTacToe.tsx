import React, { Component } from 'react';
import './TicTacToe.scss';

import Board from '../Board/Board';

interface Props {}

interface State {
    history: Array<{ squares: Array<String | null> }>;
    isXsTurn: Boolean;
    stepNumber: number;
}

class TicTacToe extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).map(x => null) }],
            isXsTurn: true,
            stepNumber: 0
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((boardConfig, moveNumber) => {
            const desc = moveNumber ? 
                `Go to move #${moveNumber}` :
                `Go to game start`;

                return (
                    <li key={moveNumber}>
                        <button onClick={() => this.jumpTo(moveNumber)}>{desc}</button>
                    </li>
                );
        });

        let status;

        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${ this.state.isXsTurn ? 'X' : 'O' }`;
        }

        return (
            <div className='TicTacToe'>
                <div className='game-board'>
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    calculateWinner(board: any[]) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let [a, b, c] of winningCombinations) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i])
            return;
            
        squares[i] = this.state.isXsTurn ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares: squares }]),
            isXsTurn: !this.state.isXsTurn,
            stepNumber: history.length
        });
    }

    jumpTo(moveNumber: number) {
        this.setState({
            stepNumber: moveNumber,
            isXsTurn: (moveNumber % 2) === 0
        });
    }
}

export default TicTacToe;