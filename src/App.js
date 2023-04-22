import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login_Page from './components/pages/Login_Page';
import Customer_Page from './components/pages/Customer_Page';
import Provider_Page from './components/pages/Provider_Page';
import Infomation_Page from './components/pages/Infomation_Page';
import Status_Page from './components/pages/Status_Page';
import Register_Page from './components/pages/Register_Page';
import Tracking_Page from './components/pages/Tracking_Page';
import Order_Page from './components/pages/Order_Page';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login_Page/>}/>
          <Route path='/customer' element={<Customer_Page/>}/>
          <Route path='/provider' element={<Provider_Page/>}/>
          <Route path='/status' element={<Status_Page/>}/>
          <Route path='/register' element={<Register_Page/>}/>
          <Route path='/tracking' element={<Tracking_Page/>}/>
          <Route path='/order' element={<Order_Page/>}/>
          <Route path='/' element={<Infomation_Page/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
