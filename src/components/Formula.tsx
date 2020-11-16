import React from 'react'
import Cell from './Cell'
import { MaskPosition } from '../enum'

type PropTypes = {
  left: number
  right: number
  outcome: number
  mask?: MaskPosition
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: 10
}

function Formula(props: PropTypes) {
  return (
    <div style={style}>
      <Cell
        val={props.left}
        hidden={props.mask === MaskPosition.Left}
        locked={props.mask !== MaskPosition.Left}
      />
      <Cell val="×" noBorder={true} slim={true} locked={true} />
      <Cell
        val={props.right}
        hidden={props.mask === MaskPosition.Right}
        locked={props.mask !== MaskPosition.Right}
      />
      <Cell val="＝" noBorder={true} slim={true} locked={true} />
      <Cell
        val={props.outcome}
        hidden={props.mask === MaskPosition.Outcome}
        locked={props.mask !== MaskPosition.Outcome}
      />
    </div>
  )
}

export default Formula
