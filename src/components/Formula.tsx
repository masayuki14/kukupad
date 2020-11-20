import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Cell from './Cell'
import { MaskPosition } from '../enum'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    base: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(0)
      }
    }
  })
)

type PropTypes = {
  left: number
  right: number
  outcome: number
  mask?: MaskPosition
  rtLeft?: string
  rtRight?: string
  rtEqual?: string
  rtOutcome?: string
}

function Formula(props: PropTypes) {
  const classes = useStyles()
  return (
    <div className={classes.base}>
      <Cell
        val={props.left}
        hidden={props.mask === MaskPosition.Left}
        locked={props.mask !== MaskPosition.Left}
        rt={props.rtLeft}
      />
      <Cell val="×" noBorder={true} slim={true} locked={true} />
      <Cell
        val={props.right}
        hidden={props.mask === MaskPosition.Right}
        locked={props.mask !== MaskPosition.Right}
        rt={props.rtRight}
      />
      <Cell
        val="＝"
        noBorder={true}
        slim={true}
        locked={true}
        rt={props.rtEqual}
      />
      <Cell
        val={props.outcome}
        hidden={props.mask === MaskPosition.Outcome}
        locked={props.mask !== MaskPosition.Outcome}
        rt={props.rtOutcome}
      />
    </div>
  )
}

export default Formula
