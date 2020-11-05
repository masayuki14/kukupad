import React from 'react';

const style = {
  cell: {
    display: 'inline-flex',
    width: 120,
    height: 120,
    border: 'solid black 3px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem'
  }
}

function Cell({ val }: { val: number }) {
  return (
    <div style={style.cell}>
      <span> {val} </span>
    </div>
  )
}

export default Cell;