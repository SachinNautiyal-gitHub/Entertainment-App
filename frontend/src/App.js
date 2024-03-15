
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import HomeComponent from './components/HomeComponent';
import BookMark from './components/BookMark'
import NotFound from './pages/NotFound';


function App() {
  return (
     <>
     
     <div className='container'>
     <BrowserRouter>
     <Routes>

      <Route  path='/' element={<Home/>}>
        <Route path='' element={<HomeComponent/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tvshows' element={<TVShows/>}/>
        <Route path='bookmark' element={<BookMark/>}/>
      </Route>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
      <Route  path='*' element={<NotFound/>} />{/* 404 page */}
     </Routes>
     </BrowserRouter>
     
     </div>
     
     
     </>
  );
}

export default App;
