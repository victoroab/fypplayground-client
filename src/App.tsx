import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppNavBar from './components/AppNavBar'
import Home from './pages/Home/Home'
import Root from './pages/Root/Root'
import Dashboard from './pages/Dashboard/Dashboard'
import MyMentor from './pages/MyMentor/MyMentor'
import SearchMentors from './pages/SearchMentors/SearchMentors'
import MentorshipRequests from './pages/MentorshipRequests/MentorshipRequests'
import Settings from './pages/Settings/Settings'

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
        { path: '/workspace', element: <Dashboard />, index: true },
        { path: '/workspace/my-mentor', element: <MyMentor /> },
        { path: '/workspace/search-mentors', element: <SearchMentors /> },
        {
          path: '/workspace/mentorship-requests',
          element: <MentorshipRequests />,
        },
        { path: '/workspace/activities', element: <div>Yo</div> },
        { path: '/workspace/settings', element: <Settings /> },
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
