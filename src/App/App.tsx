import './App.css';

import { Navigate, Route, Routes } from 'react-router';

import Navbar from '../Entities/Navbar/Navbar';
import { Compare } from '../Pages/Compare/Compare';
import { Favorite } from '../Pages/Favorite/Favorite';
import { Film } from '../Pages/Film/Film';
import { Films } from '../Pages/Films/Films';
import { NotFound } from '../Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Navigate to='/films' />} />
        <Route path='/films' element={<Films />} />
        <Route path='/films/:id' element={<Film />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
