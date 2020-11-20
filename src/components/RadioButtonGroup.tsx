import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { ButtonGroup, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: theme.spacing(1)
    },
    button: (props: { buttonWith: number }) => ({
      width: props.buttonWith
    })
  })
)

type Item<T> = {
  value: T
  label: string
}
type PropTypes<T> = {
  items: Item<T>[]
  initial?: T
  buttonWith?: number
  width: Breakpoint
  onChange?: (v: any) => void
}

function RadioButtonGroup<T>(props: PropTypes<T>) {
  const {
    items,
    initial = undefined,
    buttonWith = 104,
    width,
    onChange = () => {}
  } = props
  const classes = useStyles({ buttonWith })
  const [selectedValue, setSelectedValue] = React.useState(initial)

  const handleChange = (value: T) => {
    return () => {
      setSelectedValue(value)
      if (onChange) onChange(value)
    }
  }

  const buttons = items.map((item, i) => (
    <Button
      key={i}
      className={classes.button}
      variant={selectedValue === item.value ? 'contained' : 'outlined'}
      onClick={handleChange(item.value)}
    >
      {item.label}
    </Button>
  ))

  if (isWidthDown('xs', width) && buttons.length > 3) {
    const groups: JSX.Element[] = []
    for (let i = 0; i <= buttons.length / 3; i++) {
      groups.push(
        <ButtonGroup
          variant="outlined"
          color="primary"
          aria-label="contained primary button group"
        >
          {buttons.slice(i * 3, i * 3 + 3)}
        </ButtonGroup>
      )
    }

    return <React.Fragment>{groups}</React.Fragment>
  }

  return (
    <ButtonGroup
      variant="outlined"
      color="primary"
      aria-label="contained primary button group"
    >
      {buttons}
    </ButtonGroup>
  )
}

export default withWidth()(RadioButtonGroup)
