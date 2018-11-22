import React, { Component } from 'react';

interface Props {}

interface State {
    isGameModeOn: boolean;
    sequence: any[];
    level: number;
    currentChoice: number;
}

enum KEYS {
    DO,
    RE,
    MI,
    FA
};

let states = {
    isGameModeOn: false,
    sequence: [4, 4, 4, 4, 4, 4, 4, 4],
    level: 0,
    currentChoice: 0
}

class Piano extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className='Piano'>
                <div className='piano-control'>
                    <button onClick={() => this.startGame()}>START GAME</button>
                </div>
                <div className='piano-keys'>
                    <button onClick={() => this.keyPressed(KEYS.DO)}>DO</button>
                    <button onClick={() => this.keyPressed(KEYS.RE)}>RE</button>
                    <button onClick={() => this.keyPressed(KEYS.MI)}>MI</button>
                    <button onClick={() => this.keyPressed(KEYS.FA)}>FA</button>
                </div>
            </div>
        );
    }

    startGame() {
        if (!states.isGameModeOn) {
            console.log('Turn on leds one by one for one second.');
            states.isGameModeOn = true;
        }
    }

    keyPressed(key: KEYS) {
        if (states.isGameModeOn) {
            this.validatePressedKey(key);
        } else {
            this.playSound(key);
        }
    }

    playSound(key: KEYS) {
        switch (key) {
            case KEYS.DO:
                console.log(`Play ${KEYS[key]} sound.`);
            break;
            case KEYS.RE:
                console.log(`Play ${KEYS[key]} sound.`);
            break;
            case KEYS.MI:
                console.log(`Play ${KEYS[key]} sound.`);
            break;
            case KEYS.FA:
                console.log(`Play ${KEYS[key]} sound.`);
            break;
        }
    }

    validatePressedKey(key: KEYS) {
        let currentChoice = states.currentChoice;
        const sequence = states.sequence.slice();
        const level = states.level;

        if (currentChoice === level) {
            this.playSound(key);
            sequence[level] = key;
            states.sequence = sequence;
            states.level = (level + 1),
            this.generateNewSequence();
        } else {
            if (sequence[currentChoice] === key) {
                this.playSound(key);
                states.currentChoice = (currentChoice + 1);
            } else {
                this.endGame();
            }
        }
    }

    generateNewSequence() {
        const level = states.level;
        const sequence = states.sequence.slice();

        for (let i = 0; i < level; i++) {
            this.playSound(sequence[i]);
        }

        const computerKey = Math.floor(Math.random() * 3);
        this.playSound(computerKey);

        sequence[level] = computerKey;
        states.sequence = sequence;
        states.level = (level + 1);
        states.currentChoice = 0;
    }

    endGame() {
        console.log('RE, RE, RE, RE sound. END GAME');
        states.isGameModeOn = false;
        states.sequence = [4, 4, 4, 4, 4, 4, 4, 4];
        states.level = 0;
        states.currentChoice = 0;
    }
}

export default Piano;