import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="header-logo bg-primary text-white flex items-center justify-center font-bold">S4</div>
          <div>
            <div className="text-primary font-semibold">SMP Negeri 4 Amuntai</div>
            <div className="text-sm text-gray-600">Portal Informasi Sekolah</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link to="/">Beranda</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/berita">Berita</Link>
          <a href="#" className="px-3 py-1 rounded-md bg-secondary text-white">Login</a>
        </nav>
      </div>
    </header>
  )
}
