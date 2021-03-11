import React from 'react'

import JoinBackground from './Backgrounds/JoinBackground'
import GameBackground from './Backgrounds/GameBackground'

interface AnimeBackgroundProps{
    bgrq: string;
}

const AnimeBackground = ({...props}: AnimeBackgroundProps): any => {
    const backgroundRequest = props.bgrq
    if(backgroundRequest === "Join") {
        return <JoinBackground/>
    } else if(backgroundRequest === "Game") {
        return <GameBackground/>
    }
}

export default AnimeBackground