import React, { useState, useEffect } from 'react'

const baseStyle = {
  display: 'inline-flex',
  height: 120,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem'
}

type PropTypes = {
  val: number | string
  rt?: string
  hidden?: boolean
  locked?: boolean
  noBorder?: boolean
  slim?: boolean
}

function Cell({
  val,
  rt = '',
  hidden = false,
  locked = false,
  noBorder = false,
  slim = false
}: PropTypes) {
  const [isHidden, switchHidden] = useState(hidden)
  const [bgColor, setBgColor] = useState(hidden ? 'gray' : '')

  const handleTap = () => {
    if (locked) return
    switchHidden(!isHidden)
    setBgColor(!isHidden ? 'gray' : '')
  }

  const optionStyle = {
    backgroundColor: bgColor,
    border: noBorder ? '0px' : 'solid black 2px',
    width: slim ? 60 : 120
  }
  const style = Object.assign(optionStyle, baseStyle)

  useEffect(() => {
    switchHidden(hidden)
    setBgColor(hidden ? 'gray' : '')
  }, [hidden, locked, val])

  return (
    <div style={style} onClick={handleTap}>
      {isHidden ? null : (
        <ruby>
          <span> {val} </span>
          <rp>（</rp>
          <rt style={{ fontSize: '0.7rem', marginBottom: 5 }}>{rt}</rt>
          <rp>）</rp>
        </ruby>
      )}
    </div>
  )
}

export default Cell
