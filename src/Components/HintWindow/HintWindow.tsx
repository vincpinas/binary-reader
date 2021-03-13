import React from 'react'
import * as FaIcons from 'react-icons/fa'

import './HintWindow.css'

interface hintWindowProps {
    mistakes: number;
    currentItem: string;
}

const HintWindow = ({...props}: hintWindowProps) => {
    const hint = props.currentItem.split('')

    return (
        <div className="c-hint-window" style={props.mistakes >= 3 ? {display: "block"} : {}}>
            <div className="hintButtonContainer">
                <button className="hintButton"><FaIcons.FaQuestion/></button>
            </div>

            <div className="hintWindow">
               {`${hint[0]}..`}
            </div>
        </div>
    )
}

export default HintWindow
