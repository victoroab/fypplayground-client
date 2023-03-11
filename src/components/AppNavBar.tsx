import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  Navbar,
  Dropdown,
  Avatar,
  Sidebar,
  Modal,
  Button,
} from 'flowbite-react'
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  HiOutlineExclamationCircle,
} from 'react-icons/hi'
import { BiBuoy } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {
  rootLocation: string | undefined | null
  setRootLocation: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >
}

const AppNavBar = ({ rootLocation, setRootLocation }: Props) => {
  // const [rootLocation, setRootLocation] = useState<string | null>(null)

  // console.log(rootLocation)

  const [showSide, setShowSide] = useState(false)
  const [visible, setVisible] = useState(false)

  function onclick() {
    setVisible(true)
  }
  function onclose() {
    setVisible(false)
  }

  function reveal() {
    setShowSide((prev) => !prev)
  }
  return (
    <main className="bg-gray-100">
      <Navbar
        fluid={true}
        rounded={true}
        className="fixed z-50 w-full border-b border-gray-200 bg-white border-r"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mentoring System
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div className="text-black">Victor Balogun</div>
                </div>
              </Avatar>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Victor Balogun</span>
              <span className="block truncate text-sm font-medium">
                oab@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Notifications</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onclick}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle onClick={reveal} />
        </div>
      </Navbar>
      <div className="w-fit">
        <Modal show={visible} size="md" popup={true} onClose={onclose}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
                Are you sure you want to sign out?
              </h3>
              <div className="flex justify-center gap-4">
                <Button onClick={onclose}>Yes, I'm sure</Button>
                <Button color="gray" onClick={onclose}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Sidebar
          aria-label="Sidebar with content separator example"
          className={`${
            showSide
              ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-10 border-r border-gray-200'
              : 'fixed top-0 left-0 z-40 w-64 h-screen pt-10 border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0'
          }`}
        >
          <Sidebar.Items className="h-full px-3 pb-4 overflow-y-auto">
            <Sidebar.ItemGroup>
              <Link to="/workspace">
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-12 mb-2">
                  <HiChartPie className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Dashboard</span>
                </li>
              </Link>

              <Link to="/workspace/activities">
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-2 mb-2">
                  <HiShoppingBag className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Activities</span>
                </li>
              </Link>

              <Link to="/workspace/search-mentors">
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-2 mb-2">
                  <AiOutlineSearch className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />

                  <span className="ml-3">Search Mentors</span>
                </li>
              </Link>

              <Link to="/workspace/mentorship-requests">
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-2 mb-2">
                  <HiInbox className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Mentorship Requests</span>
                </li>
              </Link>

              <Link to="/workspace/settings">
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-2 mb-2">
                  <HiTable className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Settings</span>
                </li>
              </Link>

              <li
                className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-black hover:text-white group mt-2 mb-2"
                onClick={onclick}
              >
                <HiArrowSmRight className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                <span className="ml-3">Sign Out</span>
              </li>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiChartPie}>Upgrade to Pro</Sidebar.Item>
              <Sidebar.Item icon={HiViewBoards}>Documentation</Sidebar.Item>
              <Sidebar.Item icon={BiBuoy}>Help</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg border-gray-600 mt-14">
          <Outlet />
        </div>
      </div>
      {/* className=
      {`${
        showSide
          ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r border-gray-200'
          : 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0'
      }`} */}
    </main>
  )
}
export default AppNavBar
