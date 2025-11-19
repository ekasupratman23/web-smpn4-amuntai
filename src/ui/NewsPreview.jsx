import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function NewsPreview(){
  const [items,setItems] = useState([])
  useEffect(()=>{
    let mounted=true
    async function load(){
      const { data } = await supabase.from('news').select('*').order('created_at', { ascending: false }).limit(3)
      if(mounted) setItems(data || [])
    }
    load()
    return ()=> mounted=false
  },[])
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.length===0 && [1,2,3].map(i=> (
        <div key={i} className="p-4 bg-white rounded-md shadow-sm">
          <div className="h-28 bg-gray-200 rounded" />
          <div className="mt-3 h-4 bg-gray-200 w-3/4 rounded" />
          <div className="mt-2 h-3 bg-gray-200 w-1/2 rounded" />
        </div>
      ))}
      {items.map(it=> (
        <div key={it.id} className="p-4 bg-white rounded-md shadow-sm">
          <div className="h-28 bg-gray-100 rounded flex items-center justify-center text-gray-600">Gambar</div>
          <h3 className="mt-3 font-semibold text-primary">{it.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{it.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
