import { useState, useEffect, useRef, Ref, useContext } from 'react'
import { TextInput, Button, Avatar, Spinner } from 'flowbite-react'
import { supabase } from '../../config/supabase'
import { AuthContext } from '../../Auth/AuthProvider'
import { Axios } from '../../config/axios'
import { useMutation } from '@tanstack/react-query'

const Messages = () => {
  const { session } = useContext(AuthContext)
  const sessionData = JSON.parse(session)
  const { user } = sessionData
  const userData = JSON.parse(localStorage.getItem('userData')!)

  const [mentor, setMentor] = useState('')

  const messageRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [remount, setRemount] = useState(false)

  useEffect(() => {
    fetchMentor()
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

  const fetchMentor = async () => {
    try {
      const response = await Axios.post(
        '/mentee/get-mentor',
        { studentEmail: user.email },
        { withCredentials: true }
      )
      setMentor(response.data.mentor.email)
      return response
    } catch (e) {
      console.log(e)
    }
  }

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('Messages')
      .select()
      .eq('sender', user.email)
      .eq('receipent', userData.mentor.email)
      .order('created_at', { ascending: true })

    if (data) {
      setMessages(data)
    } else {
      console.log(error)
    }

    const { data: receiver, error: secondError } = await supabase
      .from('Messages')
      .select()
      .eq('sender', userData.mentor.email)
      .eq('receipent', user.email)
      .order('created_at', { ascending: true })

    if (receiver) {
      setMessages((prev) => [...prev, ...receiver])
      // setMessages(receiver)
    } else {
      console.log(secondError)
    }
  }

  console.log(messages)

  // const fetchMessages2 = async () => {
  //   const { data: receiver, error: secondError } = await supabase
  //     .from('Messages')
  //     .select()
  //     .eq('sender', mentor)
  //     .eq('receipent', user.email)
  //     .order('created_at')

  //   if (receiver) {
  //     setMessages2(receiver)
  //     // setMessages(receiver)
  //   } else {
  //     console.log(secondError)
  //   }
  // }

  console.log(mentor)
  // console.log(messages)
  // console.log(messages2)

  const sendMessage = async (e: any) => {
    e.preventDefault()
    const message = messageRef.current?.value
    const { error } = await supabase.from('Messages').insert({
      sender: user.email,
      message,
      receipent: mentor,
    })

    if (error) {
      console.log(error)
    }

    messageRef.current!.value = ''
  }

  return (
    <div className="text-lg font-bold min-h-[85vh]">
      <div className="flex min-h-[85vh] rounded-lg bg-gray-200 flex-col items-start justify-between mb-3 w-full border border-3 p-6 gap-3">
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
              {messages
                .sort(
                  (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
                )
                .map((message, id) => {
                  return message.sender === mentor ? (
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
