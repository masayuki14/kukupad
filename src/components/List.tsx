import React from 'react'
import Grid from '@material-ui/core/Grid'
import Formula from './Formula'
import { MaskType, convertType } from './../enum'
import RubyTexts from '../ruby_texts'

type PropTypes = {
  steps: number[]
  axis: number
  mask?: MaskType
}

const makeMasks = (mask: MaskType | undefined, size: number) => {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(convertType(mask))
  }
  return result
}

function List(props: PropTypes) {
  const [masks, setMasks] = React.useState(
    makeMasks(props.mask, props.steps.length)
  )
  React.useEffect(() => {
    setMasks(makeMasks(props.mask, props.steps.length))
  }, [props.mask, props.steps])

  const formulas = props.steps.map((v, i) => (
    <Grid item key={i} xs={12}>
      <Formula
        key={i}
        left={props.axis}
        right={v}
        outcome={props.axis * v}
        mask={masks[i]}
        rtLeft={RubyTexts[props.axis]?.[v]?.[0]}
        rtRight={RubyTexts[props.axis]?.[v]?.[1]}
        rtEqual={RubyTexts[props.axis]?.[v]?.[2]}
        rtOutcome={RubyTexts[props.axis]?.[v]?.[3]}
      />
    </Grid>
  ))

  return (
    <React.Fragment>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {formulas}
      </Grid>
    </React.Fragment>
  )
}

export default List
