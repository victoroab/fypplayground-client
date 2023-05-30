import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <Outlet />
    </div>
  )
}
export default Container
