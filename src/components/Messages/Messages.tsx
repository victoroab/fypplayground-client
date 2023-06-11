import { useState, useEffect, useRef, Ref } from 'react'
import { TextInput, Button, Avatar, Spinner } from 'flowbite-react'
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
    <div className="text-lg font-bold min-h-[85vh]">
      <div className="flex min-h-[85vh] rounded-lg bg-gray-200 flex-col items-start justify-between mb-5 w-full border border-3 p-6 gap-3">
        {/* <div className="flex self-start items-center justify-center">
          <Avatar size="xs" />
          <MessageBox className="ml-3" />
        </div>

        <div className="flex self-end items-center justify-center mb-6">
          <MessageBox className="mr-3" />
          <Avatar size="xs" />
        </div> */}

        <div className="overflow-y-scroll w-full border h-[40rem]">
          {messages.length === 0 ? (
            <div>
              <Spinner color="gray" />
            </div>
          ) : (
            <div className="border flex flex-col">
              {messages.map((message, id) => {
                return message.sender === '2' ? (
                  <div
                    className={`flex self-start items-center justify-center`}
                    key={id}
                  >
                    <Avatar size="xs" rounded />
                    <div className="ml-3">
                      <div className="bg-white min-h-[2.7rem] border rounded-lg p-1 w-52 flex items-center text-base font-semibold pl-4">
                        <span>{message.message}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex self-end items-center justify-center mr-4`}
                    key={id}
                  >
                    <div className="mr-3">
                      <div className="bg-white min-h-[2.7rem] border rounded-lg p-1 w-52 flex items-center text-base font-semibold pl-4">
                        <span>{message.message}</span>
                      </div>
                    </div>
                    <Avatar size="xs" rounded />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <form
          className="border flex gap-5 justify-center w-full"
          onSubmit={(e) => sendMessage(e)}
        >
          <TextInput
            placeholder="Enter a message"
            className="w-full rounded-lg"
            ref={messageRef}
          />
          <Button
            className="bg-[#25425F] text-white"
            onClick={(e) => sendMessage(e)}
            color=""
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Messages
