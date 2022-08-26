import React from 'react'

const Repl = () => {
  return (
    <div className="App">
      <header className="container">
        <h1>REPL(for playground)</h1>
        <iframe
          // src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1"
          src="https://ahmadanwar93.github.io/first-jupyter-lite/repl/index.html?toolbar=1&kernel=python&theme=JupyterLab Dark"
        width="100%"
        height="500px"
        style={{ "margin": '0 auto' }}
        >
      </iframe>
    </header >
    </div >
  )
}

export default Repl