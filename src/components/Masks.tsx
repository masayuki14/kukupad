import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CssBaseline, Grid, FormControl, FormLabel } from '@material-ui/core'
import RadioButtonGroup from './RadioButtonGroup'
import { MaskType } from '../enum'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: theme.spacing(1)
    }
  })
)

type PropTypes = {
  mask?: MaskType
  onChange?: (v: MaskType) => void
}

function Masks({ mask = MaskType.Outcome, onChange = () => {} }: PropTypes) {
  const classes = useStyles()
  const items = [
    { value: MaskType.Left, label: 'ひだり' },
    { value: MaskType.Right, label: 'みぎ' },
    { value: MaskType.Outcome, label: 'こたえ' },
    { value: MaskType.Random, label: 'ばらばら' },
    { value: MaskType.None, label: 'かくさない' }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={2}>
          <FormLabel>かくすばしょ</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <RadioButtonGroup
              items={items}
              initial={mask}
              onChange={onChange}
              width={104}
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Masks
