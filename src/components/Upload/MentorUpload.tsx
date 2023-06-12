import { FileInput, TextInput, Button, Card, Select } from 'flowbite-react'
import { Axios } from '../../config/axios'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { supabase } from '../../config/supabase'
import { v4 as uuidv4 } from 'uuid'

const MentorUpload = () => {
  const [files, setFiles] = useState<any[]>([])
  // const input = useRef<HTMLInputElement | null>(null)
  const [caption, setCaption] = useState('')

  const uploadFile = async (e: any) => {
    e.preventDefault()
    let file = e.target.files[0]

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(`public/avatar${uuidv4().slice(1, 8)}.png`, file, {
        cacheControl: '3600',
        upsert: false,
      })

    console.log(data)
  }

  const getFile = async () => {
    const { data, error } = await supabase.storage
      .from('avatars')
      .list('public', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (data) {
      setFiles(data)
      console.log(data)
    } else {
      console.log(error)
    }
  }

  useEffect(() => {
    getFile()
  }, [])
  return <div>MentorUpload</div>
}
export default MentorUpload
