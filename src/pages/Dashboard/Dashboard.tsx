import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Label,
  Textarea,
  TextInput,
  Tooltip,
  Carousel,
  Spinner,
} from 'flowbite-react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CChart } from '@coreui/react-chartjs'
import { Axios } from '../../config/axios'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState, useRef } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// const events = [
//   { title: '- Meeting', start: new Date() },
//   { title: '- Check', start: new Date('March 14, 2023 15:13:00:') },
//   { title: '- Check', start: new Date('Sat Jun 24 2023') },
// ]

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)
  // const userData = { type: 'student', email: 'student2@gmail.com' }
  const queryClient = useQueryClient()
  const inputRef = useRef<any>(null)
  const titleRef = useRef<any>(null)
  const dateRef = useRef<any>(null)

  const [mentor, setMentor] = useState<any | null>(null)

  const getMentor = async (studentEmail: string) => {
    return Axios.post(
      '/mentee/get-mentor',
      { studentEmail: studentEmail },
      { withCredentials: true }
    ).then((res) => res.data)
  }

  const postMutation = useMutation({
    mutationFn: getMentor,
    onSuccess: (data) => {
      setMentor(data.mentor)
    },
  })

  const getTasks = async () => {
    try {
      const tasks = await Axios.get('/mentee/get-tasks', {
        withCredentials: true,
        headers: { 'x-user': userData.email },
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
        '/mentee/create-task',
        {
          studentEmail: userData.email,
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
    },
  })

  const [events, setEvents] = useState([])

  const getSchedules = async () => {
    const response = await Axios.get('/mentee/get-schedules', {
      withCredentials: true,
      headers: { 'x-user': userData.email },
    })
    return response.data
  }

  const createSchedule = async () => {
    const response = await Axios.post(
      '/mentee/create-schedule',
      {
        studentEmail: userData.email,
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
        (inputRef.current.value = ''),
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

  useEffect(() => {
    postMutation.mutate(userData.email)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-between items-center mb-4 h-auto">
        <div
          id="dash-r1"
          className="flex flex-col h-64 w-[31rem] mb-3 justify-start items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
        >
          <span className="mb-8 text-lg text-gray-900 font-bold">Mentor</span>
          <div className="flex self-start w-full justify-around">
            <div className="flex flex-col w-full self-start mr-6">
              {mentor ? (
                <div
                  className="flex justify-start mb-2 border rounded-2xl shadow-lg items-center gap-3 p-4 pt-2 hover:border-[#6E8498]"
                  // onClick={() => navigate(`/workspace/m/mentees/`)}
                >
                  <Card>
                    <Avatar />
                  </Card>
                  <span className="font-bold mb-3">
                    {`${mentor.firstName}`} {`${mentor.lastName}`}
                  </span>
                  <span className="font-semibold mb-3">
                    {`${mentor.department}`}
                  </span>
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>

        <div
          id="dash-r1"
          className="flex flex-col w-[31rem] mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-2"
        >
          <span className="mb-2 text-lg text-gray-900 font-bold">
            Tasks Overview
          </span>

          <CChart
            type="pie"
            height={250}
            width={200}
            data={{
              labels: ['completed', 'pending'],
              datasets: [
                {
                  backgroundColor: ['#34495E', '#85929E'],
                  data: [60, 40],
                },
              ],
            }}
          />
        </div>

        <div
          id="dash-r1"
          className="flex flex-col w-[33rem] mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
        >
          <span className="mb-4 text-lg text-gray-900 font-bold">Feedback</span>
          <span className="mb-4 text-md text-gray-900 font-semibold">
            Please Engage
          </span>

          <div className="flex w-full flex-col self-start mr-6">
            {/* <div className="flex w-full justify-start mb-2 border rounded-2xl shadow-lg items-center gap-4 p-4">
              <span className="font-bold w-full flex flex-col gap-3 items-start justify-center">
                Question 1
                <span className="text-md font-semibold">
                  How satsified are you with the software?
                </span>
                <span className="flex gap-3 w-full items-center justify-between">
                  <span className="flex gap-3">
                    <Button size="lg" color={'dark'} outline={true}>
                      1
                    </Button>
                    <Button size="lg" color={'dark'} outline={true}>
                      2
                    </Button>
                    <Button size="lg" color={'dark'} outline={true}>
                      3
                    </Button>
                    <Button size="lg" color={'dark'} outline={true}>
                      4
                    </Button>
                    <Button size="lg" color={'dark'} outline={true}>
                      5
                    </Button>
                  </span>
                  <Tooltip
                    content="Engaging this helps the developer improve the system"
                    placement="top"
                    animation="duration-300"
                  >
                    <BsQuestionCircle className="w-6 h-6 font-bold" />
                  </Tooltip>
                </span>
              </span>
            </div> */}
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
            Tasks
          </span>
          {tasksQuery.isLoading ? (
            <Spinner />
          ) : (
            tasksQuery.data.map((task: any, id: any) => (
              <Card className="h-auto mb-4 hover:bg-gray-50" key={id}>
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  {task.title}
                  <Button
                    size="xs"
                    color=""
                    id="tsk-btn"
                    className="bg-white border-2 border-[#25425F] hover:bg-[#25425F] hover:text-white"
                  >
                    View
                  </Button>
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
              ref={inputRef}
              placeholder="Input a task"
              required={true}
              rows={4}
            />
            <Button
              className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
              color=""
              size="sm"
              onClick={() => {
                createTaskMutation.mutate()
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
export default Dashboard
