import { AnimatePresence } from 'framer-motion'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Header from './pages/home/Header'
import Footer from './pages/home/Footer'

// Pages
import Home from './pages/home/index'
import Project from './pages/project/index'
import SideProject from './pages/side-project/index'


function App() {
  const location = useLocation();

  return (
    <>
      {/* Nav Bar */}
      <nav className='sticky top-0 p-10 md:pb-6 pr-0 pl-8 md:pr-14 md:pl-[5.4rem] pt-[1.7rem] bg-light-100 dark:bg-dark-100 transition-colors duration-300 ease-in-out'>
        <Header />
      </nav>

      {/* Page Content */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='' element={ <Home />}/>
          <Route path='/about' element={ <Home />}/>
          <Route path='/contact' element={ <Home />}/>
          <Route path='/projects/:slug' element={ <Project /> }/>
          <Route path='/side-projects/:slug' element={ <SideProject /> }/>
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
