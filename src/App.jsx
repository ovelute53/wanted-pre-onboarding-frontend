import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;