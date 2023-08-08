import { HashRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Signup from './pages/SignupPage/Signup';
import Signin from './pages/SigninPage/Signin';
import Todo from './pages/TodoPage/Todo';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/todo' element={<Todo />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;