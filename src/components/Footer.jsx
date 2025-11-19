import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-primary">SMP Negeri 4 Amuntai</div>
          <div className="text-sm text-gray-600">Alamat: (isi alamat sekolah)</div>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} SMP Negeri 4 Amuntai. All rights reserved.</div>
      </div>
    </footer>
  )
}
