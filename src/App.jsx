import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/index';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './pages/home/Header';
import Footer from './pages/home/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Nav Bar */}
      <nav className='sticky top-0 p-10 md:pb-6 pr-14 pl-[5.4rem] pt-[1.7rem] bg-light-100 dark:bg-dark-100 transition-colors duration-300 ease-in-out'>
        <Header />
      </nav>

      {/* Page Content */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/home' element={ <Home />}/>
          <Route path='/about' element={ <Home />}/>
          <Route path='/contact' element={ <Home />}/>
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
