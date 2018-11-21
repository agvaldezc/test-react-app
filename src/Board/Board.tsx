import React, { Component } from 'react';
import './Board.scss';

import BoardSpace from '../BoardSpace/BoardSpace';

class Board extends Component {
    renderBoardSpace(num: Number) {
        return <BoardSpace value={num}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div className='Board'>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderBoardSpace(0)}
                    {this.renderBoardSpace(1)}
                    {this.renderBoardSpace(2)}
                </div>
                <div className='board-row'>
                    {this.renderBoardSpace(3)}
                    {this.renderBoardSpace(4)}
                    {this.renderBoardSpace(5)}
                </div>
                <div className='board-row'>
                    {this.renderBoardSpace(6)}
                    {this.renderBoardSpace(7)}
                    {this.renderBoardSpace(8)}
                </div>
            </div>
        );
    }
}

export default Board;