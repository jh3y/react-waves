import React, { useRef, useState, useEffect, useReducer, Fragment } from 'react'
import { render } from 'react-dom'
import TweakPane from 'tweakpane'
import Waves from './modules/react-waves'

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

const WAVE_CONFIG = {
  speed: 1,
}
const DEFAULT_WAVE = [
  0, // Hue
  50, // Saturation
  50, // Lightness
  10, // Speed
  200, // Width
  15, // Height
  1, // Opacity
]

const INITIAL_CONFIG = {
  waves: [
    {
      hue: 0,
      saturation: 80,
      lightness: 100,
      speed: 10,
      width: 200,
      height: 15,
      opacity: 1,
    },
    {
      hue: 220,
      saturation: 80,
      lightness: 50,
      speed: 1,
      width: 400,
      height: 25,
      opacity: 1,
    },
    {
      hue: 220,
      saturation: 80,
      lightness: 50,
      speed: 1,
      width: 400,
      height: 25,
      opacity: 1,
    },
    {
      hue: 60,
      saturation: 100,
      lightness: 60,
      speed: 2,
      width: 400,
      height: 35,
      opacity: 0.4,
    },
    {
      hue: 220,
      saturation: 80,
      lightness: 50,
      speed: 1,
      width: 400,
      height: 25,
      opacity: 1,
    },
    {
      hue: 220,
      saturation: 80,
      lightness: 50,
      speed: 1,
      width: 400,
      height: 25,
      opacity: 1,
    },
  ],
}
const App = () => {
  // const [{ waves }, dispatch] = useReducer(WAVE_REDUCER, INITIAL_STATE)
  const tweakerRef = useRef(null)
  const [stamp, setStamp] = useState(new Date().getTime())
  const wavesRef = useRef(INITIAL_CONFIG)

  const generateWaveConfig = () => {
    const RESULT = {
      hue: [],
      saturation: [],
      lightness: [],
      speed: [],
      width: [],
      height: [],
      opacity: [],
    }
    for (let w = 0; w < wavesRef.current.waves.length; w++) {
      const WAVE = wavesRef.current.waves[w]
      RESULT.hue.push(WAVE.hue)
      RESULT.saturation.push(WAVE.saturation)
      RESULT.lightness.push(WAVE.lightness)
      RESULT.speed.push(WAVE.speed)
      RESULT.width.push(WAVE.width)
      RESULT.height.push(WAVE.height)
      RESULT.opacity.push(WAVE.opacity)
    }
    return RESULT
  }

  const waveConfigRef = useRef(generateWaveConfig())

  useEffect(() => {
    tweakerRef.current = new TweakPane({
      title: 'react-waves 🌊',
    })
    tweakerRef.current.on('change', () => {
      console.info(wavesRef.current)
      waveConfigRef.current = generateWaveConfig()
      setStamp(new Date().getTime())
    })
    const WAVE_FOLDER = tweakerRef.current.addFolder({ title: 'waves' })
    for (let w = 0; w < wavesRef.current.waves.length; w++) {
      const FOLDER = WAVE_FOLDER.addFolder({
        title: `wave ${w + 1}`,
      })
      const WAVE = wavesRef.current.waves[w]
      FOLDER.addInput(WAVE, 'hue', {
        label: 'Hue',
        min: 0,
        max: 359,
        step: 1
      })
      FOLDER.addInput(WAVE, 'saturation', {
        label: 'Saturation',
        min: 0,
        max: 100,
        step: 1
      })
      FOLDER.addInput(WAVE, 'lightness', {
        label: 'Lightness',
        min: 0,
        max: 100,
        step: 1
      })
      FOLDER.addInput(WAVE, 'speed', {
        label: 'Speed',
        min: 0,
        max: 240,
        step: 1
      })
      FOLDER.addInput(WAVE, 'width', {
        label: 'Width',
        min: 200,
        max: 1000,
        step: 100
      })
      FOLDER.addInput(WAVE, 'height', {
        label: 'Height',
        min: 10,
        max: 100,
        step: 1
      })
      FOLDER.addInput(WAVE, 'opacity', {
        label: 'Opacity',
        min: 0,
        max: 1,
        step: 0.01
      })
    }
  }, [])

  return (
    <div className={styles.container}>
      <Waves key={stamp} {...waveConfigRef.current} className={styles.waveContainer} />
      <footer className={styles.footer} />
    </div>
  )
}

render(<App />, document.querySelector('#root'))
