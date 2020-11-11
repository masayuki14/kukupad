import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { SortDirection } from './../enum'

type PropTypes = {
  direction?: SortDirection,
  onChange?: (v: SortDirection) => void
}

function Directions({ direction = SortDirection.Asc, onChange = () => { } }: PropTypes) {
  const [selectedValue, setSelectedValue] = React.useState(direction);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value))
    if (onChange) onChange(Number(event.target.value))
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <FormLabel>じゅんばん</FormLabel>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <RadioGroup row value={selectedValue} defaultValue={direction}>
              <FormControlLabel
                value={SortDirection.Asc}
                control={<Radio color="primary" onChange={handleChange} />}
                label="うえから"
                labelPlacement="top"
              />
              <FormControlLabel
                value={SortDirection.Desc}
                control={<Radio color="primary" onChange={handleChange} />}
                label="したから"
                labelPlacement="top"
              />
              <FormControlLabel
                value={SortDirection.Random}
                control={<Radio color="primary" onChange={handleChange} />}
                label="ばらばら"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Directions