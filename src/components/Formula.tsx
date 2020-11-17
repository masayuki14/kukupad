import React from 'react'
import Cell from './Cell'
import { MaskPosition } from '../enum'

type PropTypes = {
  left: number
  right: number
  outcome: number
  mask?: MaskPosition
  rtLeft?: string
  rtRight?: string
  rtEqual?: string
  rtOutcome?: string
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
        rt={props.rtLeft}
      />
      <Cell val="×" noBorder={true} slim={true} locked={true} />
      <Cell
        val={props.right}
        hidden={props.mask === MaskPosition.Right}
        locked={props.mask !== MaskPosition.Right}
        rt={props.rtRight}
      />
      <Cell
        val="＝"
        noBorder={true}
        slim={true}
        locked={true}
        rt={props.rtEqual}
      />
      <Cell
        val={props.outcome}
        hidden={props.mask === MaskPosition.Outcome}
        locked={props.mask !== MaskPosition.Outcome}
        rt={props.rtOutcome}
      />
    </div>
  )
}

export default Formula
