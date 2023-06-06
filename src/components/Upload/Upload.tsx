import { FileInput, TextInput, Button } from 'flowbite-react'
import { Axios } from '../../config/axios'
import { FormEvent, useEffect, useState } from 'react'
import { supabase } from '../../config/supabase'
import { v4 as uuidv4 } from 'uuid'

const Upload = () => {
  const [files, setFiles] = useState<any[]>([])
  const [caption, setCaption] = useState('')

  const getBuckets = async () => {
    const { data: buckets, error } = await supabase.storage.getBucket('avatars')
    // setBuckets(buckets)
    return buckets
  }

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

  return (
    <div className="">
      <h1 className="text-2xl font-extrabold">Hello</h1>
      <form
        className="w-1/3 flex gap-4 flex-col"
        encType="multipart/form-data"
        onSubmit={uploadFile}
      >
        <input type="file" onChange={(e) => uploadFile(e)} />

        <TextInput
          type="text"
          name="caption"
          placeholder="caption"
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
        {caption}
        <Button type="submit" className="bg-[#25425F]">
          Submit
        </Button>
      </form>

      <span>
        {files.map((file) => (
          <div className="grid grid-flow-col">
            <img
              src={`https://zrmhmgszaxdkexnpvcko.supabase.co/storage/v1/object/public/avatars/public/avatar45d0abc.png?t=2023-06-05T11%3A57%3A03.606Z/${file.name}`}
              alt=""
              height={100}
              width={100}
            />
          </div>
        ))}
      </span>
    </div>
  )
}
export default Upload
