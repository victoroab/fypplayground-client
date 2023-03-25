import { FileInput, TextInput, Button } from 'flowbite-react'
import { Axios } from '../../config/axios'
import { FormEvent, useState } from 'react'

const Messages = () => {
  const [file, setFile] = useState<any>()
  const [caption, setCaption] = useState('')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    formData.append('caption', caption)
    const post = await Axios.post('/upload-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    setFile(null)
    setCaption('')
    console.log(post.data)
  }
  return (
    <div className="min-h-screen">
      <form
        className="w-1/3 flex gap-4 flex-col"
        encType="multipart/form-data"
        onSubmit={submit}
      >
        {/* <FileInput
          id="file"
          name="image"
          onChange={(e) => setFile(e.target.files)}
        /> */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files![0])}
          name="image"
        />
        <TextInput
          type="text"
          name="caption"
          placeholder="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
export default Messages
