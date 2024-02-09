import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Menshop from './Components/Menshop';
import Navbar from './Components/Navbar';
import Womenshop from './Components/Womenshop';
import Kidshop from './Components/Kidshop';
import Login from './Components/Login';

function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Menshop' element={<Menshop/>}/>
  <Route path='/Womenshop' element={<Womenshop/>}/>
  <Route path='/Kidshop' element={<Kidshop/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>

    </>
  );
}

export default App;
