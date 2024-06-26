import { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Features from '../../components/Features'
import Testimonials from '../../components/Testimonials'
import CallToAction from '../../components/CallToAction'
import { Button, Modal, Dropdown } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Home = () => {
  // const [showSide, setShowSide] = useState<boolean>(false)

  // const onclick = () => {
  //   setVisible(true)
  // }
  const [visible, setVisible] = useState<boolean>(false)
  const onclose = () => {
    setVisible(false)
  }
  return (
    <main className="space-y-40 mb-40">
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
              <Dropdown label="Sign Up">
                <Dropdown.Item onClick={onclose}>
                  <Link to="/sign-up/student">
                    <span>As Student</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/sign-up/mentor">
                    <span>As Mentor</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown>
              {/* <Link to="/sign-up/student">
                <Button className="bg-primary" onClick={onclose}>
                  Sign up
                </Button>
              </Link> */}

              <Button color="gray" onClick={onclose}>
                <Link to="/sign-in">Login</Link>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <HeroSection setVisible={setVisible} />
      <Features />
      <Testimonials />
      <CallToAction setVisible={setVisible} />
    </main>
  )
}
export default Home
