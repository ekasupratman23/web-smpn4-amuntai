import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function News(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    let mounted = true
    async function load(){
      const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false })
      if(!error && mounted) setItems(data || [])
    }
    load()
    return ()=> mounted = false
  },[])

  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Berita</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {items.map(it=> (
          <div key={it.id} className="p-4 bg-white rounded-md shadow-sm">
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600">Gambar</div>
            <h3 className="mt-3 font-semibold text-primary">{it.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{it.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
