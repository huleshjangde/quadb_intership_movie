import './App.css';
import MovieCard from './components/MovieCard';
import BookTicket from './pages/BookTicket';
import Summry from './pages/Summry';
import { Routes, Route } from "react-router-dom"



function App() {
  return (
   <>


<Routes>
  <Route path='/' element={<MovieCard/>}/>
        <Route path="/summary/:id" element={ <Summry/> } />
        <Route path="/bookshow/:id" element={ <BookTicket/> } />
      </Routes>
   </>
  );
}

export default App;
