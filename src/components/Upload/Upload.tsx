import { FileInput, TextInput, Button, Card, Select } from 'flowbite-react'
import { Axios } from '../../config/axios'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { supabase } from '../../config/supabase'
import { v4 as uuidv4 } from 'uuid'

const Upload = () => {
  const [files, setFiles] = useState<any[]>([])
  // const input = useRef<HTMLInputElement | null>(null)
  const [caption, setCaption] = useState('')
  const captionRef = useRef<any>(null)

  const uploadFile = async (e: any) => {
    e.preventDefault()
    let file = e.target.files[0]

    const { data, error } = await supabase.storage
      .from('images')
      .upload(
        `students/${captionRef.current.value + '-' + uuidv4().slice(1, 8)}.png`,
        file,
        {
          cacheControl: '3600',
          upsert: false,
        }
      )
  }

  const getFile = async () => {
    const { data, error } = await supabase.storage
      .from('images')
      .list('students', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (data) {
      setFiles(data)
    } else {
      console.log(error)
    }
  }

  useEffect(() => {
    getFile()
  }, [])

  return (
    <div className="min-h-screen">
      <div>
        <Card className="mb-3 flex ">
          <form
            className="w-1/3 flex gap-4 flex-col"
            encType="multipart/form-data"
          >
            <input type="file" onChange={(e) => uploadFile(e)} />

            <TextInput
              type="text"
              name="caption"
              placeholder="Add caption"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
              ref={captionRef}
            />

            <Select id="to">
              <option>Mentor</option>
              <option>Storage</option>
            </Select>

            <Button
              type="submit"
              className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2 border-b-4"
              color=""
              onClick={uploadFile}
            >
              Submit
            </Button>
          </form>
        </Card>

        <Card>
          <span>
            {files.map((file, id) => (
              <div className="grid grid-flow-col" key={id}>
                <span>id</span>
                {file.name}
                <img
                  src={`https://qchykkskxlbahxjwbzbz.supabase.co/storage/v1/object/public/images/students/${file.name}
                  `}
                  alt=""
                  height={100}
                  width={100}
                />
                <span className="text-blue-500 cursor-pointer">download</span>
              </div>
            ))}
          </span>
        </Card>
      </div>
    </div>
  )
}
export default Upload
