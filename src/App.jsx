import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Common/Layout'
import HomePage from './Pages/HomePage/HomePage'
import AboutUs from './Pages/HomePage/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout HomePage={HomePage} />}/>
        <Route path="/about" element={<Layout HomePage={AboutUs} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
