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
          <Route path='/'  element={<Home />} />
          <Route path='/repl'  element={<Repl />} />
          <Route path='/observable' element={<Observable />} />
          <Route path='/jlite'  element={<Jlite />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
