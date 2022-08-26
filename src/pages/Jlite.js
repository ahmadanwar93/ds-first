import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Jlite = () => {
  return (
    <div className="App">
      <header className="container">
        <h1>Jupyter Lite</h1>
        <iframe
          className='jlite'
          src="https://ahmadanwar93.github.io/first-jupyter-lite/lab/index.html?toolbar=1&kernel=python&theme=JupyterLab Dark"
          style={{ "margin": '0 auto' }}
        >
        </iframe>
      </header >
    </div >
  )
}

export default Jlite