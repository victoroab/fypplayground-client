import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppNavBar from './components/AppNavBar'
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

function App() {
  const [rootLocation, setRootLocation] = useState<string | null>()
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root rootLocation={rootLocation} setRootLocation={setRootLocation} />
      ),
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
      ],
    },
    {
      path: '/workspace',
      element: (
        <AppNavBar
          rootLocation={rootLocation}
          setRootLocation={setRootLocation}
        />
      ),
      children: [
        { path: '/workspace', element: <Dashboard />, index: true }, // Reuse Route
        { path: '/workspace/my-mentor', element: <MyMentor /> },
        { path: '/workspace/search-mentors', element: <SearchMentors /> },
        {
          path: '/workspace/mentorship-requests', // Reuse Route
          element: <MentorsRequests />,
        },
        { path: '/workspace/activities', element: <div>Yo</div> }, // Reuse Route
        { path: '/workspace/settings', element: <Settings /> }, // Reuse Route
        { path: '/workspace/my-mentees', element: <MenteesTable /> },
        { path: '/workspace/:menteeId', element: <Mentees /> },
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
