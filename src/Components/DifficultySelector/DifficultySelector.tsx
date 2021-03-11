import React from 'react'
import { Link } from 'react-router-dom';

import './DifficultySelector.css'

import AnimeBackground from '../AnimeBackground/AnimeBackground';

interface difficultyProps {
    setDifficulty: any;
}

const DifficultySelector = ({ setDifficulty }: difficultyProps) => {
    return (
        <React.Fragment>
            <AnimeBackground bgrq="Join"/>
            <div className="c-difficulty">
                <h2>Please select a difficulty</h2>
                <form>
                    <Link className="difficultyButton" onClick={(event) => setDifficulty('easy')} to={`/game`}>
                        Easy
                    </Link>
                    <Link className="difficultyButton" onClick={(event) => setDifficulty('normal')} to={`/game`}>
                        Normal
                    </Link>
                    <Link className="difficultyButton" onClick={(event) => setDifficulty('hard')} to={`/game`}>
                        Hard
                    </Link>
                </form>
            </div>
        </React.Fragment>
    )
}

export default DifficultySelector
