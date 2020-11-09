import React from 'react';
import { useState } from 'react';

const baseStyle = {
  display: 'inline-flex',
  height: 120,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem'
}

type PropTypes = {
  val: number | string,
  hidden?: boolean,
  locked?: boolean,
  noBorder?: boolean,
  slim?: boolean,
}

function Cell({ val, hidden = false, locked = false, noBorder = false, slim = false }: PropTypes) {

  const [isHidden, switchHidden] = useState(hidden)
  const handleTap = () => locked ? null : switchHidden(!isHidden)
  const bgcolor = () => isHidden ? 'gray' : 'white'
  const optionStyle = {
    backgroundColor: !locked ? bgcolor() : bgcolor(),
    border: noBorder ? '0px' : 'solid black 2px',
    width: slim ? 60 : 120
  }
  const style = Object.assign(
    optionStyle,
    baseStyle
  )

  return (
    <div style={style} onTouchEnd={handleTap} onClick={handleTap}>
      <span> {isHidden ? null : val} </span>
    </div>
  )
}

export default Cell;