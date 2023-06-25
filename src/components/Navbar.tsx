import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Dropdown, Modal } from 'flowbite-react'
import { supabase } from '../config/supabase'

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const navigate = useNavigate()

  const onclick = () => {
    setVisible(true)
  }

  const onclose = () => {
    setVisible((prev) => !prev)
  }

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'konjidaddy12@gmail.com',
      password: 'br0@db1s3',
    })

    if (error) {
      console.log(error)
    }
  }

  return (
    <header>
      <Modal show={visible} size="lg" popup={true} onClose={onclose}>
        <Modal.Header className="bg-gray-800"></Modal.Header>
        <Modal.Body className="bg-gray-800">
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
              Click on 'Sign up' to register an account, click on 'Login' to
              login into your account
            </h3>
            <div className="flex justify-center gap-4">
              {/* <Button
                className="bg-primary"
                onClick={() => {
                  onclose(), navigate('/sign-up/student')
                }}
              >
                Sign up
              </Button> */}
              <Dropdown label="Sign Up">
                <Dropdown.Item
                  onClick={() => {
                    onclose(), navigate('/sign-up/student')
                  }}
                >
                  <span>As Student</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    onclose(), navigate('/sign-up/mentor')
                  }}
                >
                  <span>As Mentor</span>
                </Dropdown.Item>
              </Dropdown>
              <Button
                color="gray"
                onClick={() => {
                  onclose(), navigate('/sign-in')
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* {signedIn === true ? <Navigate to="/" /> : null} */}

      <nav className="z-10 w-full absolute">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a
                href="#home"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  {/* <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div> */}
                  <img
                    src="/Group2.svg"
                    alt="Vomentor logo"
                    height={35}
                    width={35}
                  />
                </div>
                <span className="text-2xl font-bold text-white">Vomentor</span>
              </a>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden bg-gray-900/70"
            ></div>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            shadow-none bg-gray-800 border-gray-700"
            >
              <div className="text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <a
                      href="#features"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Docs</span>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#solution"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Solution</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Testimonials</span>
                    </a>
                  </li> */}
                  <li>
                    <Link
                      to={'/workspace'}
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Workspace</span>
                    </Link>
                    {/* <a
                      href="#blog"
                      className="block md:px-4 transition hover:text-primary"
                    >
                    </a> */}
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0 cursor-pointer" onClick={onclick}>
                <span className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="relative text-sm font-semibold text-white">
                    Get Started
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
