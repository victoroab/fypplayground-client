import { useState } from 'react'
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
      path: '/register',
      element: <Register />,
    },
    {
      path: '/workspace',
      element: <AppLayout />,
      children: [
        { element: <Dashboard />, index: true }, // Reuse Route
        { path: '/workspace/my-mentor', element: <MyMentor /> },
        { path: '/workspace/search-mentors', element: <SearchMentors /> },
        {
          path: '/workspace/mentorship-requests', // Reuse Route
          element: <MentorshipRequests />, //<MentorsRquests />
        },
        { path: '/workspace/actions', element: <Actions /> }, // Reuse Route
        { path: '/workspace/settings', element: <Settings /> }, // Reuse Route
        { path: '/workspace/my-mentees', element: <MenteesTable /> },
        { path: '/workspace/my-mentees/:studentId', element: <Mentees /> },
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
