import React from 'react'
export default function Prestasi(){
  const items = [ { title: 'Juara 1 Lomba Cerdas Cermat Kabupaten', year: 2024 }, { title: 'Juara 2 Festival Seni', year: 2023 }, { title: 'Juara 3 Olimpiade Matematika', year: 2022 } ]
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it,i)=> (
        <div key={i} className="p-4 bg-white rounded-md shadow-sm">
          <div className="font-semibold text-primary">{it.title}</div>
          <div className="text-sm text-gray-600">Tahun {it.year}</div>
        </div>
      ))}
    </div>
  )
}
