import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;