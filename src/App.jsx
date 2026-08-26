import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from './Pages/HomePage/HomePage'
import Layout from './components/Common/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
