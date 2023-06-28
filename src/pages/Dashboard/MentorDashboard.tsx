import {
  Table,
  Button,
  Avatar,
  Card,
  Textarea,
  Label,
  TextInput,
  Tooltip,
  Spinner,
  Badge,
} from 'flowbite-react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useNavigate } from 'react-router-dom'
import { BsQuestionCircle } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { Axios } from '../../config/axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { HiCheck } from 'react-icons/hi'

const MentorDashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)
  const navigate = useNavigate()
  const [students, setStudents] = useState<any[]>([])

  const inputRef = useRef<any>(null)

  const titleRef = useRef<any>(null)
  const dateRef = useRef<any>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const response = await Axios.post(
        '/mentor/get-students',
        { mentorEmail: userData?.email },
        { withCredentials: true }
      )
      setStudents(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  const getTasks = async () => {
    try {
      const tasks = await Axios.get('/mentor/get-tasks', {
        withCredentials: true,
        headers: { 'x-user': userData?.email },
      })
      return tasks.data
    } catch (e) {
      console.log(e)
    }
  }

  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const createTask = async () => {
    try {
      const result = await Axios.post(
        '/mentor/create-task',
        {
          mentorEmail: userData?.email,
          title: inputRef.current.value,
        },
        { withCredentials: true }
      )
      return result
    } catch (e) {
      console.log(e)
    }
  }

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']), (inputRef.current.value = '')
      queryClient.invalidateQueries(['numbers'])
    },
  })

  const getTaskNumbers = async () => {
    try {
      const numbers = await Axios.get('/mentor/get-task-number', {
        withCredentials: true,
        headers: { 'x-user': userData.email },
      })
      return numbers.data
    } catch (e) {
      console.log(e)
    }
  }

  const numbersQuery = useQuery({
    queryKey: ['numbers'],
    queryFn: getTaskNumbers,
  })

  const [events, setEvents] = useState([])

  const getSchedules = async () => {
    const response = await Axios.get('/mentor/get-schedule', {
      withCredentials: true,
      headers: { 'x-user': userData.email },
    })
    return response.data
  }

  const createSchedule = async () => {
    const response = await Axios.post(
      '/mentor/create-schedule',
      {
        mentorEmail: userData.email,
        title: titleRef.current.value,
        date: dateRef.current.value,
      },
      { withCredentials: true }
    )
    return response
  }

  const scheduleQuery = useQuery({
    queryKey: ['schedules'],
    queryFn: getSchedules,
  })

  useEffect(() => {
    if (scheduleQuery.data) {
      const eventsData = scheduleQuery.data.map((schedule: any) => ({
        title: `- ${schedule.title}`,
        date: new Date(schedule.date),
      }))

      setEvents(eventsData)
    }
  }, [scheduleQuery.data])

  const scheduleMutation = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['schedules']),
        (titleRef.current.value = ''),
        (dateRef.current.value = '')
    },
  })

  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{' ' + eventInfo.timeText}</b>
        <i>{' ' + eventInfo.event.title}</i>
      </>
    )
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-between items-center mb-4 h-auto">
        <div
          id="dash-r1"
          className="flex flex-col h-64 w-[64rem] mb-3 overflow-x-scroll justify-center items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
        >
          <span className="mb-4 text-lg text-gray-900 font-bold">
            My Students
          </span>
          <div className="flex gap-7 w-full justify-start cursor-default">
            {students.map((student, id) => (
              <div
                className="flex justify-center mb-2 border rounded-2xl shadow-lg items-center gap-3 p-4 pt-2 hover:border-[#6E8498]"
                onClick={() => navigate(`/workspace/m/mentees/${student.id}`)}
                key={id}
              >
                <Card>
                  <Avatar />
                </Card>
                <span className="font-bold mb-3">
                  {`${student.firstName}`} {`${student.lastName}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          id="dash-r1"
          className="flex flex-col w-[33rem] mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
        >
          <span className="mb-4 text-lg text-gray-900 font-bold">Feedback</span>
          <div className="flex w-full flex-col self-start mr-6">
            <span className="mb-1 text-md text-gray-900 font-semibold">
              Provide Suggestions for the next feature release
            </span>
            <Textarea className="w-full h-24 mb-3" placeholder="..."></Textarea>
            <Button
              className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
              color=""
              size="sm"
            >
              Send
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4" id="dash-r2">
        <div
          className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-2/3 flex-col p-6 overflow-y-scroll"
          id="dash-r2-c"
        >
          <span className="mt-4 mb-4 text-xl font-bold text-gray-900 self-center">
            Calendar & Events
          </span>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
          />
        </div>

        <div
          className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-1/3 flex-col overflow-y-scroll p-6"
          id="dash-r2-c"
        >
          <span className="mt-4 mb-4 text-xl font-bold text-gray-900 self-center">
            My Tasks
          </span>
          {tasksQuery.isLoading ? (
            <Spinner />
          ) : (
            tasksQuery.data?.slice(0, 4).map((task: any, id: any) => (
              <Card
                className="h-auto mb-4 hover:bg-gray-50 cursor-pointer"
                key={id}
                onClick={() => navigate('/workspace/actions/tasks')}
              >
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  {task.title}
                  {task.completed !== '' ? <Badge icon={HiCheck} /> : ''}
                </span>
              </Card>
            ))
          )}
        </div>
      </div>

      <div id="dash-r3" className="flex w-full gap-4 mb-4">
        <div
          className="flex w-1/2 align-center h-auto mb-4 rounded-2xl bg-white dark:bg-gray-200 flex-col p-6"
          id="dash-r3-c"
        >
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Create Task
          </span>
          <div
            className="flex justify-center mb-4 border rounded-2xl shadow-lg items-center gap-5 p-4"
            id="dash-r3-k"
          >
            <Textarea
              id="comment"
              className="h-20"
              placeholder="Input a task"
              required={true}
              rows={4}
              ref={inputRef}
            />
            <Button
              className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
              color=""
              size="sm"
              onClick={() => {
                createTaskMutation.mutate()
                // console.log(inputRef.current.value)
              }}
            >
              Create
            </Button>
          </div>
        </div>

        <div
          className="flex flex-col w-1/2 align-center h-auto mb-4 rounded-2xl bg-white dark:bg-gray-200 p-6"
          id="dash-r3-c"
        >
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Schedule Event
          </span>
          <div
            className="flex flex-warp h-auto justify-between mb-4 border rounded-2xl shadow-lg items-end gap-5 p-4 "
            id="dash-r3-c2"
          >
            <div className="w-[12rem]" id="c2-ch">
              <div className="mb-2 block">
                <Label htmlFor="base" value="Title" />
              </div>
              <TextInput
                id="base"
                type="text"
                sizing="md"
                placeholder="Title of event"
                className=""
                ref={titleRef}
              />
            </div>

            <div className="w-[12rem]" id="c2-ch">
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <div className="">
                <div className="flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="date"
                  id="date"
                  ref={dateRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div className="w-[12rem]" id="c2-ch">
              <Button
                className="self-end text-white bg-[#25425F] hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
                color=""
                size="sm"
                onClick={() => scheduleMutation.mutate()}
              >
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MentorDashboard
