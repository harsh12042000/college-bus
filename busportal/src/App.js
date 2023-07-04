import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer';
import { Home } from './Modules/Home';
import Login from './Components/Account/Login';
import { Registration } from './Components/Account/Registration';
import AddBus from './Components/Bus/AddBus';
import AddDriver from './Components/BusDriver/AddDriverDetails';
import BusDetails from './Components/Bus/BusDetails';
import DriverDetails from './Components/BusDriver/DriverDetails';
import StudentDetails from './Components/StudentDetails';

function App() {
  return (
    <BrowserRouter>
      <Headers/>
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/addbus' element={<AddBus/>}></Route>
        <Route path='/adddriver' element={<AddDriver/>}></Route>
        <Route path='/busdetails' element={<BusDetails/>}></Route>
        <Route path='/driverdetails' element={<DriverDetails/>}></Route>
        <Route path='/studentdetails' element={<StudentDetails/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
