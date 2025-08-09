import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar1 from './components/Navbar1'
import Manager from './components/Manager'
import Footer from './components/Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar1/>
      <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Manager/>
      </div>
      {/* <div className='min-h-[87vh]'>
      <Manager/>
      </div> */}
      
      <Footer/>
     
    </>
  )
}

export default App
