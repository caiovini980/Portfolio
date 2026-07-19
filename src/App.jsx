import { AnimatePresence } from 'framer-motion';
import MainPage from './pages/MainPage';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Nav Bar */}
      <nav className=''>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Content */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/home' element={ <MainPage />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
