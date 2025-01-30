// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
// import MovieCard from './components/movieCard'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/favorites'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/movieContexts'

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
