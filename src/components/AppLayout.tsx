import { Outlet, Link } from 'react-router-dom'
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
  HiOutlineExclamationCircle,
} from 'react-icons/hi'
import { FiMessageSquare } from 'react-icons/fi'
import { RxActivityLog } from 'react-icons/rx'
import { RxDashboard } from 'react-icons/rx'
import { TbNotification } from 'react-icons/tb'
import { IoSettingsOutline } from 'react-icons/io5'
import { VscSignOut } from 'react-icons/vsc'
import { BiBuoy } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

const AppLayout = () => {
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
        <Navbar.Brand href="">
          <div className="flex items-center justify-center sm:items-center sm:justify-center">
            <img
              src="/Group2.svg"
              className="h-4 pr-2 sm:h-8"
              alt="Vomentor Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-[#34495E]">
              Vomentor
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex lg:order-2">
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
                  <div className="text-black" id="user-name">
                    Victor Balogun
                  </div>
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
          <Navbar.Toggle onClick={reveal} id="nav-toggle" />
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
              : 'fixed top-0 left-0 z-40 w-64 h-screen pt-10 border-r border-gray-200 transition-transform -translate-x-full lg:translate-x-0'
          }`}
        >
          <Sidebar.Items className="h-full px-3 pb-4 overflow-y-auto">
            <Sidebar.ItemGroup>
              <Link to="/workspace" onClick={() => setShowSide(false)}>
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-12 mb-2">
                  <RxDashboard className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Home</span>
                </li>
              </Link>

              <Link to="/workspace/actions" onClick={() => setShowSide(false)}>
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-2 mb-2">
                  <FiMessageSquare className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Actions</span>
                </li>
              </Link>

              <Link
                to="/workspace/search-mentors"
                onClick={() => setShowSide(false)}
              >
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-2 mb-2">
                  <AiOutlineSearch className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />

                  <span className="ml-3">Search Mentors</span>
                </li>
              </Link>

              <Link
                to="/workspace/mentorship-requests"
                onClick={() => setShowSide(false)}
              >
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-2 mb-2">
                  <TbNotification className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Mentorship Requests</span>
                </li>
              </Link>

              <Link to="/workspace/settings" onClick={() => setShowSide(false)}>
                <li className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-2 mb-2">
                  <IoSettingsOutline className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                  <span className="ml-3">Settings</span>
                </li>
              </Link>

              <li
                className="flex cursor-pointer items-center p-2 text-base font-medium text-black rounded-lg hover:bg-[#34495e] hover:text-white group mt-2 mb-2"
                onClick={() => {
                  onclick()
                  setShowSide(false)
                }}
              >
                <VscSignOut className="w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
                <span className="ml-3">Sign Out</span>
              </li>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup className="cursor-pointer">
              <Sidebar.Item icon={HiViewBoards}>Documentation</Sidebar.Item>
              <Sidebar.Item icon={BiBuoy}>Help</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="p-4 lg:ml-64">
        <div className="p-4 rounded-lg border-gray-600 mt-14">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
export default AppLayout

{
  /* className=
      {`${
        showSide
          ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r border-gray-200'
          : 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0'
      }`} */
}
