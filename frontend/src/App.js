
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
     <>
     
     <div className='container'>
     <BrowserRouter>
     <Routes>

      <Route  path='/' element={<Home/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
     
     </div>
     
     
     </>
  );
}

export default App;
