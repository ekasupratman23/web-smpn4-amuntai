import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Profil from './pages/Profil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bgalt">
        <Header />
        <main className="container mx-auto flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/berita" element={<News/>} />
            <Route path="/profil" element={<Profil/>} />
            <Route path="*" element={<Home/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
