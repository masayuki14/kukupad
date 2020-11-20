import React from 'react'
import Steps from './Steps'
import Masks from './Masks'
import Directions from './Directions'
import Axes from './Axes'

import { MultiplyStep, MaskType, SortDirection } from './../enum'

type PropTypes = {
  step?: MultiplyStep
  mask?: MaskType
  direction?: SortDirection
  axis?: number
  onChangeStep?: (v: number) => void
  onChangeMask?: (v: number) => void
  onChangeDirection?: (v: number) => void
  onChangeAxis?: (v: number) => void
}

function Menu({
  step,
  mask,
  direction,
  axis,
  onChangeStep,
  onChangeMask,
  onChangeDirection,
  onChangeAxis
}: PropTypes) {
  return (
    <div>
      <Steps step={step} onChange={onChangeStep} />
      <Masks mask={mask} onChange={onChangeMask} />
      <Directions direction={direction} onChange={onChangeDirection} />
      <Axes axis={axis} onChange={onChangeAxis} max={step} />
    </div>
  )
}

export default Menu
