import React from 'react'

import './Game.css'

import { textToBinary } from '../Helpers'
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
    const gameDataSet = (difficulty: string) => {
        if (difficulty === 'easy') return WordDataSets.easywords
        else if (difficulty === 'normal') return WordDataSets.normalwords
        else if (difficulty === 'hard') return WordDataSets.hardwords
    }

    const currentGameDataSet: any = gameDataSet(props.difficulty)
    currentGameDataSet.map((word: string) => {
        return (
            console.log(word), 
            console.log(textToBinary(word))
        )
    })
    
    return (
        <React.Fragment>
            <div className="c-game">
                <UserInfo userName={props.userName} rank={props.rank} highScore={props.highScore} points={props.points} mistakes={props.mistakes}/>
                <main className="gameContainer">
                    <div className="gameDisplay">
                        
                    </div>
                    <input className="gameInput"/>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Game
