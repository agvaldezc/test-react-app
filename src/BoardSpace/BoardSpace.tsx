import React, { Component } from 'react';
import './BoardSpace.scss';

interface Props {
    value: String;
    onClick: () => any;
}

interface State {
    value: String | null;
}

class BoardSpace extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className='BoardSpace' onClick={() => { this.props.onClick()}}>
                {this.props.value}
            </button>
        );
    }
}

export default BoardSpace;