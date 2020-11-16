import React from 'react'
import Grid from '@material-ui/core/Grid'
import Formula from './Formula'
import { MaskType, convertType } from './../enum'

type PropTypes = {
  steps: number[]
  axis: number
  mask?: MaskType
}

function List(props: PropTypes) {
  const formulas = props.steps.map((v, i) => (
    <Grid item xs={12} sm={6} lg={4} key={i}>
      <Formula
        key={i}
        left={props.axis}
        right={v}
        outcome={props.axis * v}
        mask={convertType(props.mask)}
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
