import React from 'react'
import Grid from '@material-ui/core/Grid'
import Formula from './Formula'
import { MaskType, convertType } from './../enum'
import { RubyTexts } from '../constants'

type PropTypes = {
  steps: number[]
  axis: number
  mask?: MaskType
}

function List(props: PropTypes) {
  const formulas = props.steps.map((v, i) => (
    <Grid item key={i} xs={12}>
      <Formula
        key={i}
        left={props.axis}
        right={v}
        outcome={props.axis * v}
        mask={convertType(props.mask)}
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
