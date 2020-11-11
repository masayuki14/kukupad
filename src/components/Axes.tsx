import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
)

type PropTypes = {
  axis?: number,
  onChange?: (v: number) => void
}

function Axes({ axis = 1, onChange = () => { } }: PropTypes) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(axis);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(Number(event.target.value))
    if (onChange) onChange(Number(event.target.value))
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((v, i) => {
    return (
      <MenuItem key={i} value={v}>{v}</MenuItem>
    )
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <FormLabel>かけるかず</FormLabel>
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Axes