import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Root = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default Root
