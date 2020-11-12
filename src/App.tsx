import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// import logo from './logo.svg';
import './App.css'
import { MaskType, SortDirection, MultiplyStep } from './enum'
import Menu from './components/Menu'
import List from './components/List'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

const makeSteps = (direction: SortDirection, step: MultiplyStep) => {
  const steps = [
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
  let targetSteps: number[] = []

  switch (direction) {
    case SortDirection.Asc:
      targetSteps = steps.slice(0, step)
      break
    case SortDirection.Desc:
      targetSteps = steps.slice(0, step).sort((a, b) => b - a)
      break
    case SortDirection.Random:
      targetSteps = (([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
      })(steps.slice(0, step))
  }
  return targetSteps
}

function App() {
  const [step, setStep] = React.useState(MultiplyStep.Nine)
  const [mask, setMask] = React.useState(MaskType.Outcome)
  const [direction, setDirection] = React.useState(SortDirection.Random)
  const [axis, setAxis] = React.useState(1)

  const onChangeStep = (v: MultiplyStep) => setStep(v)
  const onChangeMask = (v: MaskType) => setMask(v)
  const onChangeDirection = (v: SortDirection) => setDirection(v)
  const onChangeAxis = (v: number) => setAxis(v)

  const [selectedSteps, setSelectedSteps] = React.useState(
    makeSteps(direction, step)
  )
  const [selectedMask, setSelectedMask] = React.useState(mask)
  const [selectedAxis, setSelectedAxis] = React.useState(axis)

  // ボタンタップで設定を反映させる
  const flowSettings = () => {
    setSelectedMask(mask)
    setSelectedSteps(makeSteps(direction, step))
    setSelectedAxis(axis)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <body>
          <div>
            <Menu
              step={step}
              onChangeStep={onChangeStep}
              mask={mask}
              onChangeMask={onChangeMask}
              direction={direction}
              onChangeDirection={onChangeDirection}
              axis={axis}
              onChangeAxis={onChangeAxis}
            />
            <Button variant="contained" color="primary" onClick={flowSettings}>
              かけざんを始める
            </Button>
            <List
              axis={selectedAxis}
              mask={selectedMask}
              steps={selectedSteps}
            />
          </div>
        </body>
      </ThemeProvider>
    </div>
  )
}

export default App
