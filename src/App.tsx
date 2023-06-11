import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: (
        <div className="text-9xl font-extrabold w-full h-full flex items-center justify-center">
          404
          <p className="text-sm">Return home</p>
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
      // element: <RegisterMentor />,
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
        }, // Reuse Route
        { path: '/workspace/actions/upload', element: <Upload /> },
        { path: '/workspace/actions/message', element: <Messages /> },
        { path: '/workspace/settings', element: <Settings /> },

        // Mentor's Routes
        { path: '/workspace/m', element: <MentorDashboard /> },
        { path: '/workspace/m/actions' },
        { path: '/workspace/m/actions/upload' },
        { path: '/workspace/m/actions/message' },
        { path: '/workspace/m/mentees', element: <MenteesTable /> },
        { path: '/workspace/m/mentees/:studentId', element: <Mentees /> },
        {
          path: '/workspace/m/mentorship-requests',
          element: <MentorsRequests />,
        },
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
