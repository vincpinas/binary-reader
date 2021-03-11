import React, { useState, useEffect } from 'react'

import './UserInfo.css'

import NoviceRank from '../../Assets/NoviceRank.jpg'
import BeginnerRank from '../../Assets/BeginnerRank.jpg'
import IntermediateRank from '../../Assets/IntermediateRank.jpg'
import ExpertRank from '../../Assets/ExpertRank.jpg'
import MasterRank from '../../Assets/MasterRank.jpg'

interface userInfoProps {
    userName: string;
    rank: string;
    highScore: number;
    points: number;
    mistakes: number;
}

const UserInfo = ({...props}: userInfoProps) => {
    const [rankImage, setRankImage] = useState('')

    useEffect(() => {
        if(props.rank === 'Novice') setRankImage(NoviceRank)
        else if(props.rank === 'Beginner') setRankImage(BeginnerRank)
        else if(props.rank === 'Intermediate') setRankImage(IntermediateRank)
        else if(props.rank === 'Expert') setRankImage(ExpertRank)
        else if(props.rank === 'Master') setRankImage(MasterRank)
    }, [props.rank])

    return (
        <div className="c-user-info">
            <div className="userRankImg">
                <img src={rankImage} alt="Rank"/>
            </div>
            <div className="infoWrapper">
                <div className={`userInfoText ${props.rank}Border`}>
                    <h4>{props.userName}</h4>
                    <h5 className={props.rank}>{props.rank}</h5>
                </div>
                <div className={`userInfoStats ${props.rank}Border`}>
                    <p>Points: {props.points}</p>
                    <p>Mistakes: {props.mistakes}</p>
                </div>
                <div className={`userInfoHighScore ${props.rank}Border`}>
                    <p>HighScore: {props.highScore}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
