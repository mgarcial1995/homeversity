import Home from './views/Home';
import Carshop from './views/Carshop';
import Premium from './views/Premium';
import Programs from './views/Programs';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/programs' element={<Programs/>} />
        <Route path='/premium' element={<Premium/>} />
        <Route path='/carshop' element={<Carshop/>} />
      </Routes>
    </div>
  );
}

export default App;
