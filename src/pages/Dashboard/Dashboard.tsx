import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Label,
  Textarea,
  TextInput,
} from 'flowbite-react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CChart } from '@coreui/react-chartjs'
import { Axios } from '../../config/axios'

const events = [{ title: 'Meeting', start: new Date() }]

const Dashboard = () => {
  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 mb-4 h-72">
        <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-100 p-4">
          <span className="mb-4 text-lg text-gray-900 font-bold">My Menor</span>
          <div className="flex flex-col w-56 justify-center mb-4 border rounded-2xl shadow-lg items-center gap-4 p-2">
            <Avatar size="lg" />
            <span className="font-bold flex flex-col">
              Victor Balogun
              <span className="text-sm m-auto font-semibold">
                MIS 400 Level
              </span>
            </span>
            <Button
              size="xs"
              // className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black hover:border-black"
              color={'dark'}
              outline={true}
            >
              View
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-100 p-6 w-[48rem]"></div>

        <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-100 p-2 w-[20rem]">
          <span className="mb-4 text-lg text-gray-900 font-bold">
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
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-1/3 flex-col overflow-y-scroll p-6">
          <span className="mt-4 mb-4 text-xl font-bold text-gray-900 self-center">
            Tasks
          </span>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-around font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-around font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-around font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-around font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions
              <Button size="xs" color="dark" outline={true}>
                View
              </Button>
            </span>
          </Card>
          {/* <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              <Checkbox className="mr-6" color="dark" />
              Noteworthy technology acquisitions 2021
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              <Checkbox className="mr-6" />
              Noteworthy technology acquisitions 2021
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              <Checkbox className="mr-6" />
              Noteworthy technology acquisitions 2021
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              <Checkbox className="mr-6" />
              Noteworthy technology acquisitions 2021
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              <Checkbox className="mr-6" />
              Noteworthy technology acquisitions 2021
            </span>
          </Card> */}
        </div>

        <div className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-[60rem] flex-col p-6 overflow-y-scroll">
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

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex align-center h-48 mb-4 rounded-2xl bg-white dark:bg-gray-200 flex-col p-6 overflow-y-scroll">
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Create Task
          </span>
          <div className="flex justify-center mb-4 border rounded-2xl shadow-lg items-center gap-5 p-4">
            <Textarea
              id="comment"
              placeholder="Input a task"
              required={true}
              rows={4}
            />
            <Button className="bg-blue-800 hover:bg-white hover:text-blue-700 hover:border-blue-700 border-2 border-b-4">
              Create
            </Button>
          </div>
        </div>
        <div className="flex align-center h-48 mb-4 rounded-2xl bg-white dark:bg-gray-200 flex-col p-6 overflow-y-scroll">
          <span className="mb-4 text-lg text-gray-900 font-bold self-center">
            Schedule Event
          </span>
          <div className="flex justify-center mb-4 border rounded-2xl shadow-lg items-center gap-5 p-4">
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
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Date" />
              </div>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
            <Button className="self-end bg-blue-800 hover:bg-white hover:text-blue-700 hover:border-blue-700 border-2 border-b-4">
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
