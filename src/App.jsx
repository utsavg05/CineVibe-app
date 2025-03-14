import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Events from './pages/Events';
import Shows from './pages/Shows';
import Movies from './pages/Movies';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    {/* <Footer /> */}
    </>

  )
}

export default App;