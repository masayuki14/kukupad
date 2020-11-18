import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CssBaseline, Grid, FormControl, FormLabel } from '@material-ui/core'
import RadioButtonGroup from './RadioButtonGroup'
import { MultiplyStep } from './../enum'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: theme.spacing(1)
    },
    button: {
      width: 88
    }
  })
)

type PropTypes = {
  step?: MultiplyStep
  onChange?: (v: MultiplyStep) => void
}

function Steps({ step = MultiplyStep.Nine, onChange = () => {} }: PropTypes) {
  const classes = useStyles()
  const items = [
    { value: MultiplyStep.Nine, label: '9 × 9' },
    { value: MultiplyStep.Sixteen, label: '16 × 16' },
    { value: MultiplyStep.Twenty, label: '20 × 20' }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={12} sm={2}>
          <FormLabel>かけざんのだんすう</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <RadioButtonGroup<MultiplyStep>
              items={items}
              initial={step}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Steps
