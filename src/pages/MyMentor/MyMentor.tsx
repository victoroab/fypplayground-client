import React, { useState } from 'react'
import { Avatar } from 'flowbite-react'

const MyMentor = () => {
  const [visible, setVisible] = useState(false)

  function onclick() {
    setVisible(true)
  }
  function onclose() {
    setVisible(false)
  }
  return (
    <div className="flex items-start border flex-col">
      <span className="text-xl font-bold mb-16">Mentors Profile</span>
      <Avatar rounded={true} size="lg" className="border mt-10" />
      <span className="text-sm font-semibold">Profile</span>
    </div>
  )
}
export default MyMentor
