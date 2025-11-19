import React from 'react'
import Slider from '../ui/Slider'
import Stats from '../ui/Stats'
import NewsPreview from '../ui/NewsPreview'
import Prestasi from '../ui/Prestasi'
import VideoPlaceholder from '../ui/VideoPlaceholder'

export default function Home(){
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-6 items-center mt-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">SMP Negeri 4 Amuntai</h1>
          <p className="mt-3 text-gray-700">Mengembangkan Potensi, Mewujudkan Generasi Hebat</p>
          <p className="mt-4">Selamat datang di website resmi SMP Negeri 4 Amuntai. Portal ini menyediakan informasi kegiatan, pengumuman, dan sumber belajar bagi warga sekolah dan masyarakat.</p>
          <div className="flex gap-3 mt-6">
            <a href="/profil" className="px-4 py-2 rounded-md bg-primary text-white">Pelajari Profil</a>
            <button disabled className="px-4 py-2 rounded-md border border-primary text-primary bg-white/50">PPDB - Coming Soon</button>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </section>

      <section className="mt-10">
        <Stats />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
        <NewsPreview />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Prestasi</h2>
        <Prestasi />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Video Profil Sekolah</h2>
        <VideoPlaceholder />
      </section>

      <section className="mt-10 mb-20">
        <h2 className="text-2xl font-semibold mb-4">Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="h-36 bg-gray-200 rounded-md" />
          <div className="h-36 bg-gray-200 rounded-md" />
          <div className="h-36 bg-gray-200 rounded-md" />
          <div className="h-36 bg-gray-200 rounded-md" />
        </div>
      </section>
    </div>
  )
}
