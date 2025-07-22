import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar1 from './components/Navbar1'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar1/>
      <Manager/>
     
    </>
  )
}

export default App
