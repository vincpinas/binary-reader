import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

import './HintWindow.css'

interface hintWindowProps {
    mistakes: number;
    currentItem: string;
}

const HintWindow = ({...props}: hintWindowProps) => {
    const hint = props.currentItem.split('')
    const [hintActive, setHintActive] = useState(false);
    const hintSetter = () => setHintActive(!hintActive)

    return (
        <div className={hintActive ? "c-hint-window active" : "c-hint-window"} style={props.mistakes >= 3 ? {display: "flex"} : {}}>
            <button className="hintButton" onClick={hintSetter}><FaIcons.FaQuestion className="hintLogo"/></button>
            <div className="hintWindow">{`${hint[0]}..`}</div>
        </div>
    )
}

export default HintWindow
