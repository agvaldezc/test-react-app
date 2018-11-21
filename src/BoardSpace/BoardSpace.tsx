import React, { Component } from 'react';
import './BoardSpace.scss';

interface Props {
    value: Number;
}

interface State {

}

class BoardSpace extends Component<Props, State> {
    render() {
        return (
            <button className='BoardSpace'>
                {this.props.value}
            </button>
        );
    }
}

export default BoardSpace;