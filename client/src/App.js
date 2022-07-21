import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="auth-wrapper">
        <Routes>
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
