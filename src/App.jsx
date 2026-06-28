import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import Home from './pages/Home'
import Solutions from './Solutions/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'

import EMDoc from './Solutions/EMDoc'
import EMDocB2BSmartConnect from './Solutions/EMDocB2BSmartConnect'

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