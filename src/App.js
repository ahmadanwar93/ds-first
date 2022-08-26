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
        <Routes basename={process.env.REACT_APP_FOR_PATH}>
          <Route path='/' exact element={<Home />} />
          <Route path='/repl' exact element={<Repl />} />
          <Route path='/observable' exact element={<Observable />} />
          <Route path='/jlite' exact element={<Jlite />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
