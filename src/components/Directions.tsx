import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioButtonGroup from './RadioButtonGroup'
import { SortDirection } from './../enum'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: theme.spacing(1)
    }
  })
)

type PropTypes = {
  direction?: SortDirection
  onChange?: (v: SortDirection) => void
}

function Directions({
  direction = SortDirection.Asc,
  onChange = () => {}
}: PropTypes) {
  const classes = useStyles()
  const items = [
    { value: SortDirection.Asc, label: 'うえから' },
    { value: SortDirection.Desc, label: 'したから' },
    { value: SortDirection.Random, label: 'ばらばら' }
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
          <FormLabel>じゅんばん</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <RadioButtonGroup
              items={items}
              initial={direction}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Directions
