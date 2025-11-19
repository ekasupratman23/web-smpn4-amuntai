import React from 'react'
export default function Stats(){
  const stats = [ { label: 'Guru', value: 40 }, { label: 'Siswa', value: 500 }, { label: 'Kelas', value: 18 } ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(s=> (
        <div key={s.label} className="p-4 bg-white rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-primary">{s.value}</div>
          <div className="text-sm text-gray-600">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
