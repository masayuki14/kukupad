import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  })
)

type PropTypes = {
  axis?: number
  onChange?: (v: number) => void
}

function Axes({ axis = 1, onChange = () => {} }: PropTypes) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = React.useState(axis)
  const values = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(Number(event.target.value))
    if (onChange) onChange(Number(event.target.value))
  }
  const handlePlus = () => {
    if (selectedValue === values[values.length - 1]) return
    setSelectedValue(selectedValue + 1)
    if (onChange) onChange(selectedValue + 1)
  }
  const handleMinus = () => {
    if (selectedValue === values[0]) return false
    setSelectedValue(selectedValue - 1)
    if (onChange) onChange(selectedValue - 1)
  }

  const items = values.map((v, i) => {
    return (
      <MenuItem key={i} value={v}>
        {v}
      </MenuItem>
    )
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <FormLabel>かけるかず</FormLabel>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton color="primary" component="span" onClick={handleMinus}>
            <RemoveCircleIcon fontSize="large" />
          </IconButton>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              onChange={handleChange}
            >
              {items}
            </Select>
          </FormControl>
          <IconButton color="primary" component="span" onClick={handlePlus}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Axes
