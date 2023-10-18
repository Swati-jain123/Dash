
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
// import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Home1 from './pages/Home1';
import Dashboard from './pages/Dashboard';
import Barcharts from './pages/Barcharts';
import Piechart from './pages/Piechart';
import Profile from './pages/Profile';

function App() {
  return (

   <BrowserRouter>
    {/* <li>
      
     <Link to="/Signin">About us</Link>
    </li> */}
    <Routes>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/"element={<Home/>}/>
        <Route path="/Home1"element={<Home1/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route exact path ="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/Barcharts" element={<Barcharts/>}/>
        <Route exact path="/Piechart" element={<Piechart/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        
    </Routes>
   </BrowserRouter>
  );
}

export default App;
