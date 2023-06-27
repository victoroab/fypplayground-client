import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import AppNavBar from './components/AppLayout'
import Home from './pages/Home/Home'
import Root from './pages/Root/Root'
import Dashboard from './pages/Dashboard/Dashboard'
import MyMentor from './pages/MyMentor/MyMentor'
import SearchMentors from './pages/SearchMentors/SearchMentors'
import MentorshipRequests from './pages/MentorshipRequests/MentorshipRequests'
import MentorsRequests from './pages/MentorshipRequests/MentorsRequests'
import Settings from './pages/Settings/Settings'
import Mentees from './pages/Mentees/Mentees'
import MentorDashboard from './pages/Dashboard/MentorDashboard'
import MenteesTable from './pages/Mentees/MenteesTable'
import Actions from './pages/Actions/Actions'
import AppLayout from './components/AppLayout'
import Register from './pages/Register/Register'
import { AuthProvider } from './Auth/AuthProvider'
import SignIn from './pages/SignIn/SignIn'
import Upload from './components/Upload/Upload'
import Messages from './components/Messages/Messages'
import RegisterMentor from './pages/Register/RegisterMentor'
import MentorActions from './pages/Actions/MentorActions'
import MentorMessages from './components/Messages/MentorMessages'
import MentorUpload from './components/Upload/MentorUpload'
import MentorSettings from './pages/Settings/MentorSettings'
import Tasks from './pages/Tasks/Tasks'
import Schedules from './pages/schedules/Schedules'
import MentorSchedules from './pages/schedules/MentorSchedules'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: (
        <div className="text-9xl gap-3 font-extrabold w-full h-full flex items-center justify-center">
          404
          <p className="text-sm">
            <Link to="/">Return home</Link>
          </p>
        </div>
      ),
      children: [
        {
          // path: '/',
          element: <Home />,
          index: true,
        },
      ],
    },
    {
      path: '/sign-up/student',
      element: <Register />,
    },
    {
      path: '/sign-up/mentor',
      element: <RegisterMentor />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    // Protected (Requires Auth)
    {
      path: '/workspace',
      element: (
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      ),
      children: [
        // Student's routes
        { element: <Dashboard />, index: true },
        { path: '/workspace/my-mentor', element: <MyMentor /> },
        { path: '/workspace/search-mentors', element: <SearchMentors /> },
        {
          path: '/workspace/mentorship-requests',
          element: <MentorshipRequests />,
        },
        {
          path: '/workspace/actions',
          element: <Actions />,
        },
        { path: '/workspace/actions/upload', element: <Upload /> },
        { path: '/workspace/actions/message', element: <Messages /> },
        { path: '/workspace/actions/tasks', element: <Tasks /> },
        { path: '/workspace/actions/schedules', element: <Schedules /> },
        { path: '/workspace/settings', element: <Settings /> },

        // Mentor's Routes
        { path: '/workspace/m', element: <MentorDashboard /> },
        { path: '/workspace/m/actions', element: <MentorActions /> },
        { path: '/workspace/m/actions/upload', element: <MentorUpload /> },
        { path: '/workspace/m/actions/message', element: <MentorMessages /> },
        {
          path: '/workspace/m/actions/schedules',
          element: <MentorSchedules />,
        },
        { path: '/workspace/m/mentees', element: <MenteesTable /> },
        { path: '/workspace/m/mentees/:studentId', element: <Mentees /> },
        {
          path: '/workspace/m/mentorship-requests',
          element: <MentorsRequests />,
        },

        { path: '/workspace/m/settings', element: <MentorSettings /> },
      ],
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
