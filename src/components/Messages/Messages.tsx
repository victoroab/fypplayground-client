import { useState, useEffect, useRef, Ref } from 'react'
import { TextInput, Button, Avatar } from 'flowbite-react'
import MessageBox from './MessageBox'
import { supabase } from '../../config/supabase'

const Messages = () => {
  const ID = '1'
  const messageRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [remount, setRemount] = useState(false)

  useEffect(() => {
    fetchMessages()
  }, [remount])

  supabase
    .channel('any')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'Messages' },
      (payload) => {
        setRemount((prev) => !prev)
      }
    )
    .subscribe()

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('Messages').select()
    if (data) {
      setMessages(data)
    } else {
      console.log(error)
    }
  }

  const sendMessage = async (e: any) => {
    e.preventDefault()
    const message = messageRef.current?.value
    const { error } = await supabase.from('Messages').insert({
      sender: '1',
      message,
      receipent: '2',
    })

    if (error) {
      console.log(error)
    }

    messageRef.current!.value = ''
  }

  return (
    <div className="text-lg font-bold">
      <div className="flex flex-col items-center justify-start mb-5 w-full border border-3 p-6 gap-3">
        {/* <div className="flex self-start items-center justify-center">
          <Avatar size="xs" />
          <MessageBox className="ml-3" />
        </div>

        <div className="flex self-end items-center justify-center mb-6">
          <MessageBox className="mr-3" />
          <Avatar size="xs" />
        </div> */}

        <>
          {messages.map((message, id) => {
            return message.sender === '2' ? (
              <div
                className={`flex self-start items-center justify-center`}
                key={id}
              >
                <Avatar size="xs" />
                <div className="ml-3">
                  <div className="bg-white min-h-[2.7rem] border rounded-lg p-1 w-52 flex items-center text-base font-semibold pl-4">
                    <span>{message.message}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`flex self-end items-center justify-center`}
                key={id}
              >
                <div className="mr-3">
                  <div className="bg-white min-h-[2.7rem] border rounded-lg p-1 w-52 flex items-center text-base font-semibold pl-4">
                    <span>{message.message}</span>
                  </div>
                </div>
                <Avatar size="xs" />
              </div>
            )
          })}
        </>

        <form
          className="m-auto flex gap-5 justify-center w-full"
          onSubmit={(e) => sendMessage(e)}
        >
          <TextInput
            placeholder="Enter a message"
            className="w-full"
            ref={messageRef}
          />
          <Button className="bg-[#25425F]" onClick={(e) => sendMessage(e)}>
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Messages
