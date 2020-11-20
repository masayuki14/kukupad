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
import { FormControlLabel, Switch } from '@material-ui/core'
import { RANDOM_AXIS } from '../constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    grid: {
      margin: theme.spacing(1)
    }
  })
)

type PropTypes = {
  axis?: number
  max?: number
  onChange?: (v: number) => void
}

const axisNumbers = (max: number) =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].slice(
    0,
    max
  )

function Axes({ axis = 1, max = 20, onChange = () => {} }: PropTypes) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = React.useState(axis)
  const [checked, toggleChecked] = React.useState(false)
  const values = axisNumbers(max)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(Number(event.target.value))
    onChange(Number(event.target.value))
  }
  const handlePlus = () => {
    toggleChecked(false)
    if (selectedValue === values[values.length - 1]) return
    setSelectedValue(selectedValue + 1)
    onChange(selectedValue + 1)
  }
  const handleMinus = () => {
    toggleChecked(false)
    if (selectedValue === values[0]) return
    setSelectedValue(selectedValue - 1)
    onChange(selectedValue - 1)
  }
  const handleToggle = () => {
    toggleChecked(!checked)
    if (!checked) {
      onChange(RANDOM_AXIS)
    } else {
      onChange(selectedValue)
    }
  }

  const items = values.map((v, i) => {
    return (
      <MenuItem key={i} value={v}>
        {v}
      </MenuItem>
    )
  })

  React.useEffect(() => {
    if (selectedValue > max) setSelectedValue(max)
  }, [selectedValue, max])

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
          <FormLabel>かけるかず</FormLabel>
        </Grid>
        <Grid item xs={12} sm={8}>
          <IconButton
            color="primary"
            component="span"
            onClick={handleMinus}
            disabled={checked}
          >
            <RemoveCircleIcon fontSize="large" />
          </IconButton>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              onChange={handleChange}
              disabled={checked}
            >
              {items}
            </Select>
          </FormControl>
          <IconButton
            color="primary"
            component="span"
            onClick={handlePlus}
            disabled={checked}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleToggle}
                color="primary"
              />
            }
            label="ばらばらにする"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Axes
