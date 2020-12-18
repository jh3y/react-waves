import React, { useRef, useState, useEffect, Fragment } from 'react'
import { render } from 'react-dom'
// import GithubIcon from './github.svg'
import Waves from 'react-waves'

const App = () => {
  return (
    <Fragment>
      <Waves/>
    </Fragment>
  )
}

render(<App />, document.querySelector('#root'))
