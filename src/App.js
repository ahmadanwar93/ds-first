import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Repl from './pages/Repl';
import Observable from './pages/Observable';
import Jlite from './pages/Jlite';

function App() {
  return (
    <>
      <Navbar />
      <div className="App-header">
        <Routes>
          <Route path='/my-app' exact element={<Home />} />
          <Route path='/my-app/repl' exact element={<Repl />} />
          <Route path='/my-app/observable' exact element={<Observable />} />
          <Route path='/my-app/jlite' exact element={<Jlite />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
