import React from 'react'
import './StartButton.css'

const StartButton = ({handleClick}) => {
  return (
    <button onClick={handleClick} className="self-center z-10 button type1">
    <span className="btn-txt">Start</span>
    </button >
  )
}

export default StartButton