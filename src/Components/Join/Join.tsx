import React from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

import AnimeBackground from '../AnimeBackground/AnimeBackground';
import { getDayPeriod } from '../Helpers'

interface joinProps {
    userName: string;
    setUserName: any;
}

const Join = ({setUserName, userName}: joinProps) => {
    return (
        <React.Fragment>
            <AnimeBackground bgrq="Join"/>
            <div className="c-join">
                <form>
                    <div className="joinHeading">
                        <h2>{getDayPeriod()}</h2>
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
