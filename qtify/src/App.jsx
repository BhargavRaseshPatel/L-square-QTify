import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Album from './components/Album/Album'
import NavBar from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <Album />
    </>
  )
}

export default App
