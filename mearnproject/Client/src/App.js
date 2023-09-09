import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import RegisterVendor from './components/RegisterVendor';
import Dashboard from './components/userdashboard/Dashboard';
import Logout from './components/Logout';
import VendorList from './components/userdashboard/VendorList';
import AddEvent from './components/userdashboard/AddEvent';
import VDashboard from './components/vendordashboard/VDashboard';
import VLogin from './components/VLogin';
import VEvents from './components/vendordashboard/VEvents';
import Gallery from './components/Gallery';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/register-vendor' element={<RegisterVendor/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/user-dashboard' element={<Dashboard />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/vendor-list' element={<VendorList />} />
      <Route path='/add-event' element={<AddEvent />} />
      <Route path='/vendor-login' element={<VLogin />} />
      <Route path='/vendor-dashboard' element={<VDashboard />} />
      <Route path='/vendor-events' element={<VEvents />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
