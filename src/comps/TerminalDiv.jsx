import React from 'react'
import './terminalDiv.css'

const terminalDiv = ({content}) => {
  return (
<div className="terminal m-5">
  <div className="terminal-header">
    Output
  </div>
  <div className="terminal-body text-lg text-white">
  &gt;&gt; {content}
  </div>
</div>
  )
}

export default terminalDiv