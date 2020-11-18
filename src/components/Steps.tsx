import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  CssBaseline,
  Grid,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel
} from '@material-ui/core'
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
  const [selectedValue, setSelectedValue] = React.useState(step)

  const handleClick = (value: MultiplyStep) => {
    return () => {
      setSelectedValue(value)
      if (onChange) onChange(value)
    }
  }

  const buttons = (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button
        className={classes.button}
        variant={selectedValue === MultiplyStep.Nine ? 'contained' : 'outlined'}
        onClick={handleClick(MultiplyStep.Nine)}
      >
        9 × 9
      </Button>
      <Button
        className={classes.button}
        variant={
          selectedValue === MultiplyStep.Sixteen ? 'contained' : 'outlined'
        }
        onClick={handleClick(MultiplyStep.Sixteen)}
      >
        16 × 16
      </Button>
      <Button
        className={classes.button}
        variant={
          selectedValue === MultiplyStep.Twenty ? 'contained' : 'outlined'
        }
        onClick={handleClick(MultiplyStep.Twenty)}
      >
        20 × 20
      </Button>
    </ButtonGroup>
  )

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
          <FormControl>{buttons}</FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Steps
