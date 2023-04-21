import { useContext } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
