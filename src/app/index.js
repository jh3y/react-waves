import React, { useRef, useState, useEffect, Fragment } from 'react'
import { render } from 'react-dom'
// import GithubIcon from './github.svg'
import Waves from 'react-waves'

import styles from './style.css'

const CONFIG = {
  hue: [10, 30, 45, 140, 220, 280, 320],
  saturation: [100, 80, 80, 80, 80, 80, 80],
  lightness: [100, 50, 50, 50, 50, 50, 50],
  speed: [10, 30, 15, 14, 22, 28, 32],
  width: [200, 300, 400, 500, 600, 700, 800],
  height: [15, 25, 35, 40, 50, 60, 70],
  opacity: [1, 0.8, 0.6, 0.4, 0.2, 0.2, 0.1],
}

console.info(styles)

const App = () => {
  return (
    <Fragment>
      <Waves {...CONFIG} />
      <footer></footer>
    </Fragment>
  )
}

render(<App />, document.querySelector('#root'))
