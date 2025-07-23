import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Album from './components/Album/Album'
import NavBar from './components/Header/Header'
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/700.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Hero />
      <Album />
    </div>
  )
}

export default App
