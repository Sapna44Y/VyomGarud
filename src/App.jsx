import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TechnologyPage from './pages/TechnologyPage'

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </div>
  )
}

export default App