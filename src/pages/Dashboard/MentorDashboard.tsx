import { Table, Button, Avatar } from 'flowbite-react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'Check', start: new Date('March 14, 2023 15:13:00:') },
]

const MentorDashboard = () => {
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
      <div className="w-full rounded-2xl bg-white dark:bg-gray-100 p-6 mr-6">
        <span className="mb-8 w-full flex items-center justify-center text-lg text-gray-900 font-bold">
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
  )
}
export default MentorDashboard
