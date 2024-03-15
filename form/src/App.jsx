import { Routes, Route } from 'react-router-dom';

// pages
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (

   <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
    </Routes>
   </div>

  )
}

export default App
