import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rt: {
      fontSize: '0.7rem'
    },
    base: (props: { noBorder?: boolean; slim?: boolean }) => ({
      border: props.noBorder ? '0px' : 'solid black 2px',
      width: props.slim ? 60 : 120,
      display: 'inline-flex',
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
      margin: theme.spacing(1)
    })
  })
)

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
  const classes = useStyles({ noBorder, slim })

  const [isHidden, switchHidden] = useState(hidden)
  const [bgColor, setBgColor] = useState(hidden ? 'gray' : '')

  const handleTap = () => {
    if (locked) return
    switchHidden(!isHidden)
    setBgColor(!isHidden ? 'gray' : '')
  }

  const optionStyle = {
    backgroundColor: bgColor
  }

  useEffect(() => {
    switchHidden(hidden)
    setBgColor(hidden ? 'gray' : '')
  }, [hidden, locked, val])

  return (
    <div className={classes.base} style={optionStyle} onClick={handleTap}>
      {isHidden ? null : (
        <ruby>
          <span> {val} </span>
          <rp>（</rp>
          <rt className={classes.rt}>{rt}</rt>
          <rp>）</rp>
        </ruby>
      )}
    </div>
  )
}

export default Cell
