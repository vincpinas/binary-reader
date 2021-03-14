import React, { useState } from 'react'

import './Game.css'

import { textToBinary, chooseDataSet, pointSpread } from '../Helpers'
import { WordDataSets } from '../DataSets'
import UserInfo from '../UserInfo/UserInfo'
import HintWindow from '../HintWindow/HintWindow'

interface gameProps {
    difficulty: string;
    userName: string;
    rank: string;
    setRank(rank: string): any;
    highScore: number;
    setHighScore(score: number): any;
    points: number;
    setPoints(points: number): any;
    mistakes: number;
    setMistakes(mistakes: number): any;
}

const Game = ({...props}: gameProps) => {
    const currentGameDataSet: any = chooseDataSet(props.difficulty, WordDataSets);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState('');

    // game variables
    const trackerPosition = currentIndex / currentGameDataSet.length
    const trackerWidth = trackerPosition * 100 + "%"

    const endGame = () => {
        setCurrentIndex(0)
        props.setHighScore(props.points)
        props.setPoints(0)
    }

    const checkCondition = () => {
        if (currentGameDataSet.length === currentIndex + 1) {
            endGame()
        } else if (props.points < -30) {
            endGame()
        } else if (currentGameDataSet[currentIndex] === answer) {
            setCurrentIndex(currentIndex + 1)
            props.setPoints(props.points + pointSpread(props.difficulty))
            setAnswer('')
        } else if (currentGameDataSet[currentIndex] !== answer && props.mistakes > 3) {
            props.setPoints(props.points - pointSpread(props.difficulty))
            props.setMistakes(props.mistakes + 1)
            setAnswer('')
        } else if (currentGameDataSet[currentIndex] !== answer) {
           props.setMistakes(props.mistakes + 1)
           setAnswer('')
        }
    }

    return (
        <React.Fragment>
            <div className="c-game">
                <UserInfo userName={props.userName} rank={props.rank} setRank={props.setRank} highScore={props.highScore} points={props.points} mistakes={props.mistakes}/>
                <HintWindow mistakes={props.mistakes} currentItem={currentGameDataSet[currentIndex]}/>
                <main className="gameContainer">
                    <div className="gameTrack" style={{width: trackerWidth }}/>
                    <div className="gameDisplay">
                        <span>{ textToBinary(currentGameDataSet[currentIndex]) }</span>
                    </div>
                    <input 
                        className="gameInput"
                        value={answer}
                        onChange={event => setAnswer(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' && answer.length > 0 ? checkCondition() : null}
                    />
                </main>
            </div>
        </React.Fragment>
    )
}

export default Game
