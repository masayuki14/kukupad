import React from 'react'
import Grid from '@material-ui/core/Grid'
import Formula from './Formula'
import { MaskType, convertType } from './../enum'
import { RubyTexts } from '../constants'

type PropTypes = {
  pairs: { axis: number; step: number }[]
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
    makeMasks(props.mask, props.pairs.length)
  )
  React.useEffect(() => {
    setMasks(makeMasks(props.mask, props.pairs.length))
  }, [props.mask, props.pairs])

  const formulas2 = props.pairs?.map((pair, i) => (
    <Grid item key={i} xs={12}>
      <Formula
        key={i}
        left={pair.axis}
        right={pair.step}
        outcome={pair.axis * pair.step}
        mask={masks[i]}
        rtLeft={RubyTexts[pair.axis]?.[pair.step]?.[0]}
        rtRight={RubyTexts[pair.axis]?.[pair.step]?.[1]}
        rtEqual={RubyTexts[pair.axis]?.[pair.step]?.[2]}
        rtOutcome={RubyTexts[pair.axis]?.[pair.step]?.[3]}
      />
    </Grid>
  ))

  return (
    <React.Fragment>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {formulas2}
      </Grid>
    </React.Fragment>
  )
}

export default List
