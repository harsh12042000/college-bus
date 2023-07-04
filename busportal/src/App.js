import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer';
import { Home } from './Modules/Home';
import Login from './Components/Account/Login';
import { Registration } from './Components/Account/Registration';

function App() {
  return (
    <BrowserRouter>
      <Headers/>
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
