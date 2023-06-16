import { useState, useEffect, useRef, Ref, useContext } from 'react'
import {
  TextInput,
  Button,
  Avatar,
  Spinner,
  Select,
  Dropdown,
} from 'flowbite-react'
import { supabase } from '../../config/supabase'
import { AuthContext } from '../../Auth/AuthProvider'
import { Axios } from '../../config/axios'

const MentorMessages = () => {
  const { session } = useContext(AuthContext)
  const sessionData = JSON.parse(session)
  const { user } = sessionData

  const messageRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [remount, setRemount] = useState(false)

  const [students, setStudents] = useState<any[]>([])
  const [currentStudent, setCurrentStudent] = useState('')

  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  useEffect(() => {
    fetchStudents()
    Promise.all([sentMessages, receivedMessages]).then((data) =>
      setMessages([...data[0].data!, ...data[1].data!])
    )
    scrollToBottom()
  }, [remount, currentStudent])

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

  const fetchStudents = async () => {
    try {
      const response = await Axios.post(
        '/mentor/get-students',
        { mentorEmail: user.email },
        { withCredentials: true }
      )
      setStudents(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  const sentMessages = supabase
    .from('Messages')
    .select()
    .eq('sender', user.email)
    .eq('receipent', currentStudent)
    .order('created_at', { ascending: true })

  const receivedMessages = supabase
    .from('Messages')
    .select()
    .eq('sender', currentStudent)
    .eq('receipent', user.email)
    .order('created_at', { ascending: true })

  const sendMessage = async (e: any) => {
    e.preventDefault()
    const message = messageRef.current?.value
    const { error } = await supabase.from('Messages').insert({
      sender: user.email,
      message,
      receipent: currentStudent,
    })

    if (error) {
      console.log(error)
    }

    messageRef.current!.value = ''
  }

  console.log(messages)

  return (
    <div className="text-lg font-bold min-h-[85vh]">
      <Dropdown label="Select Student" size="xs">
        {students.map((student, id) => (
          <Dropdown.Item
            key={id}
            color="gray"
            onClick={() => {
              setCurrentStudent(student.email), setRemount((prev) => !prev)
            }}
          >
            {`${student.firstName}`} {`${student.lastName}`}
          </Dropdown.Item>
        ))}
      </Dropdown>

      <div className="flex min-h-[85vh] rounded-lg bg-gray-200 flex-col items-start justify-between mb-3 w-full border border-3 p-6 gap-3">
        <div className="overflow-y-scroll w-full border h-[40rem]">
          {currentStudent === '' ? (
            <div>
              {/* <Spinner color="gray" /> */}
              Select Student
            </div>
          ) : (
            <div className="border flex flex-col" ref={bottomRef}>
              {messages
                .sort(
                  (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
                )
                .map((message, id) => {
                  return message.sender === currentStudent ? (
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
              <div className="mt-10"></div>
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
export default MentorMessages
