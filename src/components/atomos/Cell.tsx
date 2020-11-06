import React from 'react';
import { useState } from 'react';

const style = {
  cell: {
    display: 'inline-flex',
    width: 120,
    height: 120,
    border: 'solid black 2px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem'
  }
}

function Cell({ val, hidden = false, locked = false }: { val: number, hidden?: boolean, locked?: boolean }) {

  const [isHidden, switchHidden] = useState(hidden)
  const handleTap = () => locked ? null : switchHidden(!isHidden)


  const divStyle = Object.assign(
    { backgroundColor: !locked && isHidden ? 'gray' : 'white' },
    style.cell
  )

  return (
    <div style={divStyle} onTouchEnd={handleTap} onClick={handleTap}>
      <span> {isHidden ? null : val} </span>
    </div>
  )
}

export default Cell;