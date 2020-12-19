import t from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './react-waves.css'
/**
 * Component that creates an SVG Wave
 * @param {object} input - the input element to obtain coordinates for
 * @param {number} selectionPoint - the selection point for the input
 */
const Waves = ({
  hue,
  id,
  saturation,
  lightness,
  width,
  opacity,
  speed,
  height,
}) => {
  const TOTAL = width.length
  return (
    <div className={styles.container}>
      {new Array(TOTAL).fill().map((_, index) => (
        <svg
          key={`wave-${id || new Date().getTime()}-${index}`}
          className={`wave ${styles.wave}`}
          style={{
            '--height': height[(TOTAL - 1) - index],
            '--width': width[(TOTAL - 1) - index],
            '--opacity': opacity[(TOTAL - 1) - index],
            '--speed': speed[(TOTAL - 1) - index],
            '--hue': hue[(TOTAL - 1) - index],
            '--saturation': saturation[(TOTAL - 1) - index],
            '--lightness': lightness[(TOTAL - 1) - index],
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 762 52.917"
          preserveAspectRatio="none">
          <defs>
            <path
              id="wave"
              d="M0 0c22.863 0 40.637 25.93 63.5 25.93S104.137 0 127 0s40.637 25.93 63.5 25.93S231.137 0 254 0s40.637 25.93 63.5 25.93S358.137 0 381 0s40.637 25.93 63.5 25.93S485.137 0 508 0s40.637 25.93 63.5 25.93S612.137 0 635 0s40.637 25.93 63.5 25.93S739.137 0 762 0v52.917H0z"
              fill="#fff"></path>
          </defs>
          <g>
            <use href="#wave"></use>
          </g>
        </svg>
      ))}
    </div>
  )
}

Waves.defaultProps = {
  hue: [0],
  saturation: [0],
  lightness: [0],
  speed: [10],
  opacity: [0.5],
  height: [10, 20, 30],
  width: [200, 400, 600],
}

Waves.propTypes = {
  id: t.string,
  hue: t.arrayOf(t.number),
  saturation: t.arrayOf(t.number),
  lightness: t.arrayOf(t.number),
  width: t.arrayOf(t.number),
  height: t.arrayOf(t.number),
  opacity: t.arrayOf(t.number),
  speed: t.arrayOf(t.number),
}

export default Waves
