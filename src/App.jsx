import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'

import EMDoc from './solutions/EMDoc'
import EMDocB2BSmartConnect from './solutions/EMDocB2BSmartConnect'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/emdoc" element={<EMDoc />} />
        <Route
          path="/solutions/emdoc-b2b-smartconnect"
          element={<EMDocB2BSmartConnect />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App