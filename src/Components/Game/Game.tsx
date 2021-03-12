import React from 'react'

import './Game.css'

import { textToBinary, chooseDataSet } from '../Helpers'
import { WordDataSets } from '../DataSets'
import UserInfo from '../UserInfo/UserInfo'

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
    const currentGameDataSet: any = chooseDataSet(props.difficulty, WordDataSets)

    return (
        <React.Fragment>
            <div className="c-game">
                <UserInfo userName={props.userName} rank={props.rank} highScore={props.highScore} points={props.points} mistakes={props.mistakes}/>
                <main className="gameContainer">
                    <div className="gameDisplay">
                    { currentGameDataSet.map((word: string, key: number) => {
                        return (
                            <div key={key}>
                                <p>{word}</p>
                                <p>{textToBinary(word)}</p>
                            </div>
                        )
                    })}
                    </div>
                    <input className="gameInput"/>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Game
