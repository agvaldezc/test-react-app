import React, { Component } from 'react';
import './Board.scss';

import BoardSpace from '../BoardSpace/BoardSpace';

interface Props {
    squares: Array<any>;
    onClick: (i: number) => any;
}

interface State {
    squares: Array<any>;
    isXsTurn: Boolean;
}

class Board extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            squares: Array(9).map(x => null),
            isXsTurn: true
        };
   }

    renderBoardSpace(i: number) {
        return <BoardSpace 
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}
                />;
    }

    render() {
        return (
            <div className='Board'>
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