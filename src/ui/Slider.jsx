import React from 'react'

export default function Slider(){
  const slides = [
    { title: 'Upacara Hari Guru', date: '25 Nov 2025' },
    { title: 'Kegiatan Pramuka', date: '10 Okt 2025' },
    { title: 'Festival Seni Siswa', date: '5 Sep 2025' }
  ]
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="h-64 bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white font-semibold">{slides[0].title}</div>
      <div className="p-3 bg-white flex items-center justify-between">
        <div>
          <div className="font-semibold">{slides[0].title}</div>
          <div className="text-sm text-gray-600">{slides[0].date}</div>
        </div>
        <button className="px-3 py-1 rounded-md bg-secondary text-white">Lihat Galeri</button>
      </div>
    </div>
  )
}
