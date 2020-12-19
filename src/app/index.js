import React, { useRef, useState, useEffect, Fragment } from 'react'
import { render } from 'react-dom'
// import GithubIcon from './github.svg'
import Waves from 'react-waves'

import './base.css'
import styles from './style.module.css'

const CONFIG = {
  hue: [10, 30, 45, 140, 220, 280, 320],
  saturation: [100, 80, 80, 80, 80, 80, 80],
  lightness: [100, 50, 50, 50, 50, 50, 50],
  speed: [10, 30, 5, 14, 22, 8, 32],
  width: [200, 300, 400, 500, 600, 700, 800],
  height: [15, 25, 35, 40, 50, 60, 70],
  opacity: [1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3],
}

const App = () => {
  return (
    <div className={styles.container}>
      <Waves {...CONFIG} className={styles.waveContainer} />
      <footer className={styles.footer} />
    </div>
  )
}

render(<App />, document.querySelector('#root'))
