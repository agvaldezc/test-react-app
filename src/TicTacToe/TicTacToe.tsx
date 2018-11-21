import React, { Component } from 'react';
import './TicTacToe.scss';

import Board from '../Board/Board';

class TicTacToe extends Component {
    render() {
        return (
            <div className='TicTacToe'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{  }</div>
                    <div>{  }</div>
                </div>
            </div>
        );
    }
}

export default TicTacToe;