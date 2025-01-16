import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </Router>
  )
}

export default App
