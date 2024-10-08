import { useState } from 'react'
import './App.css'
import { Navbar, Fact, Service, Footer } from './component/import';
import { Skills, AboutMe, Facts, Projects, Services, Header} from './container/import';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Gitouch from './container/gitouch/Gitouch';
import { FaGithub, FaFacebookF } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio__App'>
        <Header />
        <Services />
        <AboutMe />
        <Skills />
        <Projects />
        <Facts />
        <Gitouch />
        <Footer />
      </div>
    </>
  )
}

export default App