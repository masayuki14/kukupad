import React from 'react';
import Formula from './Formula'
import {
  MaskType,
  convertType
} from './../enum'

type PropTypes = {
  steps: number[],
  axis: number,
  mask?: MaskType
}

function List(props: PropTypes) {
  const formulas = props.steps.map(
    (v, i) => (<Formula key={i} left={props.axis} right={v} outcome={props.axis * v} mask={convertType(props.mask)} />)
  )

  return (
    <React.Fragment>
      {formulas}
    </React.Fragment>
  )
}

export default List