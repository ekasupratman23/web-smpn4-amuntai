import React from 'react'

export default function Profil(){
  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Profil Sekolah</h1>
      <p className="mt-3">Nama: SMP Negeri 4 Amuntai</p>
      <p>Alamat: (isi alamat sekolah)</p>
      <h2 className="mt-4 font-semibold">Visi</h2>
      <p>Menjadi lembaga pendidikan yang unggul dalam prestasi dan berkarakter.</p>
      <h2 className="mt-4 font-semibold">Misi</h2>
      <ol className="list-decimal ml-6">
        <li>Meningkatkan mutu pembelajaran</li>
        <li>Membentuk karakter peserta didik</li>
        <li>Meningkatkan prestasi akademik dan non-akademik</li>
      </ol>
      <h2 className="mt-4 font-semibold">Kepala Sekolah</h2>
      <div className="mt-2 p-4 bg-white rounded-md shadow-sm">
        <div className="font-semibold">Irwan Rozanie, M.Pd.</div>
        <div className="text-sm text-gray-600">Kepala Sekolah SMP Negeri 4 Amuntai</div>
        <p className="mt-2">Sambutan singkat: Selamat datang di SMP Negeri 4 Amuntai. Kami berkomitmen membentuk generasi hebat melalui pendidikan bermutu.</p>
      </div>
    </div>
  )
}
