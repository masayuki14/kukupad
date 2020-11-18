import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ButtonGroup, Button, ThemeProvider } from '@material-ui/core'

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

type Item<T> = {
  value: T
  label: string
}
type PropTypes<T> = {
  items: Item<T>[]
  initial?: T
  onChange?: (v: T) => void
}

function RadioButtonGroup<T>({
  items,
  initial = undefined,
  onChange = () => {}
}: PropTypes<T>) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = React.useState(initial)

  const handleChange = (value: T) => {
    return () => {
      setSelectedValue(value)
      if (onChange) onChange(value)
    }
  }

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      {items.map((item, i) => {
        return (
          <Button
            key={i}
            className={classes.button}
            variant={selectedValue === item.value ? 'contained' : 'outlined'}
            onClick={handleChange(item.value)}
          >
            {item.label}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}

export default RadioButtonGroup
