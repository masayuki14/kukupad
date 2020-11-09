import React from 'react';
import Formula from './Formula'
import {
  MaskPosition,
  MaskType,
  convertType
} from './../enum'

const list = (axis: number, step: number, mask?: MaskType | undefined) => {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const list = []
  for (let i = 0; i < step; i++) {
    let position = convertType(mask)
    list.push((<Formula left={axis} right={steps[i]} outcome={axis * steps[i]} mask={position} />))
  }
  return list
}

type PropTypes = {
  axis: number,
  step: number,
  maskType?: MaskType
}

function List(props: PropTypes) {
  return (
    <div>
      { list(props.axis, props.step, props.maskType)}
    </div>
  )
}

export default List