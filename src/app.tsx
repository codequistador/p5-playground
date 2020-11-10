import React from 'react'
import { render } from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
// import beginnings from './sketches/the-beginning'
import sketch from './sketches/thing-is'
import 'normalize.css'

function App() {
  return <P5Wrapper sketch={sketch} />
}

render(<App />, document.getElementById('app'))
