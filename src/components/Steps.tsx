import React, { ReactComponentElement, ReactElement } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MultiplyStep } from './../enum'

type PropTypes = {
  step?: MultiplyStep,
  onChange?: (v: MultiplyStep) => void
}

function Steps({ step = MultiplyStep.Nine, onChange = () => { } }: PropTypes) {
  const [selectedValue, setSelectedValue] = React.useState(step);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
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
          <FormLabel>かけざんのだんすう</FormLabel>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <RadioGroup row value={selectedValue} defaultValue={step}>
              <FormControlLabel
                value={MultiplyStep.Nine}
                control={<Radio color="primary" onChange={handleChange} />}
                label="9"
                labelPlacement="top"
              />
              <FormControlLabel
                value={MultiplyStep.Sixteen}
                control={<Radio color="primary" onChange={handleChange} />}
                label="16"
                labelPlacement="top"
              />
              <FormControlLabel
                value={MultiplyStep.Twenty}
                control={<Radio color="primary" onChange={handleChange} />}
                label="20"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Steps