import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Signup from './pages/SignupPage/Signup';
import Signin from './pages/SigninPage/Signin';

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