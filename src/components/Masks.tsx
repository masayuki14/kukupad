import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MaskType } from '../enum'

type PropTypes = {
  mask?: MaskType,
  onChange?: (v: MaskType) => void
}

function Masks({ mask = MaskType.Outcome, onChange = () => { } }: PropTypes) {
  const [selectedValue, setSelectedValue] = React.useState(mask);

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
          <FormLabel>かくすばしょ</FormLabel>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <RadioGroup row value={selectedValue} defaultValue={mask}>
              <FormControlLabel
                value={MaskType.Left}
                control={<Radio color="primary" onChange={handleChange} />}
                label="ひだり"
                labelPlacement="top"
              />
              <FormControlLabel
                value={MaskType.Right}
                control={<Radio color="primary" onChange={handleChange} />}
                label="みぎ"
                labelPlacement="top"
              />
              <FormControlLabel
                value={MaskType.Outcome}
                control={<Radio color="primary" onChange={handleChange} />}
                label="こたえ"
                labelPlacement="top"
              />
              <FormControlLabel
                value={MaskType.Random}
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

export default Masks