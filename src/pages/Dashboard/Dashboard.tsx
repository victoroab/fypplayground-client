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
} from 'flowbite-react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CChart } from '@coreui/react-chartjs'
import { BsQuestionCircle } from 'react-icons/bs'
import { Axios } from '../../config/axios'

const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'Check', start: new Date('March 14, 2023 15:13:00:') },
]

const Dashboard = () => {
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
          className="flex flex-col h-64 w-[28rem] mb-3 justify-start items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
        >
          <span className="mb-8 text-lg text-gray-900 font-bold">
            Menorship Details
          </span>
          <div className="flex self-start w-full justify-around">
            <div className="flex flex-col w-full self-start mr-6">
              <div className="flex flex-col justify-start mb-2 border rounded-2xl shadow-lg items-start p-4 pt-2">
                <span className="font-bold self-center mb-3">Mentor</span>

                {/* <div className="flex gap-4 justify-start items-center">
                  <Avatar size="md" rounded={true} />
                  <span className="flex flex-col items-start gap-3">
                    <div className="flex gap-4">
                      <span className="font-bold">Name:</span>
                      <span className="font-semibold">Victor Balogun</span>
                      <span className="font-bold">Course:</span>
                      <span className="font-semibold">MIS</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-bold">Level:</span>
                      <span className="font-semibold">400</span>
                      <span className="font-bold">Matric No:</span>
                      <span className="font-semibold">19CH026505</span>
                    </div>
                  </span>
                </div> */}
              </div>
              {/* <div className="flex justify-between mt-6">
                <span className="font-bold flex gap-3 items-start justify-center mr-2">
                  Duration: <span className="font-semibold ">3 Months</span>{' '}
                </span>

                <span className="font-bold flex gap-3 items-start justify-center mr-2">
                  Time Left: <span className="font-semibold ">3 Months</span>{' '}
                </span>
              </div> */}
            </div>
          </div>
        </div>

        <div
          id="dash-r1"
          className="flex flex-col w-[28rem] mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-2"
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
          className="flex flex-col w-[28rem] mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-6"
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

      <div className="flex gap-4 mb-4">
        <div className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-1/3 flex-col overflow-y-scroll p-6">
          <span className="mt-4 mb-4 text-xl font-bold text-gray-900 self-center">
            Tasks
          </span>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
        </div>

        <div className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-2/3 flex-col p-6 overflow-y-scroll">
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
      </div>

      <div id="dash-r3" className="flex w-full gap-4 mb-4">
        <div className="flex w-1/2 align-center h-48 mb-4 rounded-2xl bg-white dark:bg-gray-200 flex-col p-6">
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Create Task
          </span>
          <div className="flex justify-center mb-4 border rounded-2xl shadow-lg items-center gap-5 p-4">
            <Textarea
              id="comment"
              className="h-20"
              placeholder="Input a task"
              required={true}
              rows={4}
            />
            <Button className="bg-[#25425F] hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2 border-b-4">
              Create
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 align-center h-48 mb-4 rounded-2xl bg-white dark:bg-gray-200 flex-col p-6">
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Schedule Event
          </span>
          <div className="flex justify-around mb-4 border rounded-2xl shadow-lg items-center gap-5 p-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Title" />
              </div>
              <TextInput
                id="base"
                type="text"
                sizing="md"
                placeholder="Title of event"
              />
            </div>
            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
            <Button className="self-end bg-[#25425F] hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2 border-b-4">
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
