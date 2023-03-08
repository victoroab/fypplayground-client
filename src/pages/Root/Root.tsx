import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

type Props = {
  rootLocation: string | undefined | null
  setRootLocation: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >
}

const Root = ({ rootLocation, setRootLocation }: Props) => {
  // const [rootLocation, setRootLocation] = useState<string | null>()

  return (
    <>
      <Navbar setRootLocation={setRootLocation} rootLocation={rootLocation} />

      <div>
        <Outlet />
      </div>
    </>
  )
}
export default Root
