
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
     <>
     
     <div className='container'>
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Login/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
     
     </div>
     
     
     </>
  );
}

export default App;
