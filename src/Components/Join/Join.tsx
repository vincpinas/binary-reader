import React from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

import AnimeBackground from '../AnimeBackground/AnimeBackground';

interface joinProps {
    userName: string;
    setUserName: any;
}

const Join = ({setUserName, userName}: joinProps) => {
    const date = new Date();
    const currentHour = date.getHours()

    const getCurrentTime = () => {
        if(currentHour >= 18) {
            return "Good Evening,"
        } else if(currentHour >= 12) {
            return "Good Afternoon,"
        } else {
            return "Good Morning,"
        }
    }


    return (
        <React.Fragment>
            <AnimeBackground bgrq="Join"/>
            <div className="c-join">
                <form>
                    <div className="joinHeading">
                        <h2>{getCurrentTime()}</h2>
                        <h4>Please fill in a username.</h4>
                    </div>
                    <input placeholder="Enter Name.." className="joinInput" type="text" onChange={(event) => setUserName(event.target.value)}/>
                </form>
                <Link onClick={event => (!userName || userName.length > 13) ? event.preventDefault() : null} to={`/difficulty`}>
                    <button className="joinButton" type="submit">Click to Join</button>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Join
