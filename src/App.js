import './App.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import UserRoutes from './Routes/UserRoutes';
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/*' element={<Home/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/register' element={<Register/>}/>
    //   </Routes>
    // </BrowserRouter>
    <Router>
    <Routes>
      <Route path='/*' element={<UserRoutes />} />
    </Routes>
  </Router>
   
  )
}

export default App;
