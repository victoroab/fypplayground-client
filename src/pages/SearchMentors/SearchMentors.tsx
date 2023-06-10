import { Alert, Table, Button, Avatar, Tooltip, Modal } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Axios } from '../../config/axios'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Auth/AuthProvider'

export type Mentor = {
  id: string
  firstName: string
  middleName: string
  lastName: string
  gender: string
  email: string
  rank: string
  staffNo: string
  department: string
  Hobbies: { id: string; hobbies: string }
  Skills: { id: string; skills: string }
}

const SearchMentors = () => {
  const user = {
    email: 'dev@gmail.com',
  }

  const { session } = useContext(AuthContext)
  const sessionData = JSON.parse(session)

  // const { user } = sessionData

  const [mentors, setMentors] = useState<Mentor[]>([])
  const [alertState, setAlertState] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const [visible, setVisible] = useState(false)
  const onclick = () => setVisible(true)
  const onclose = () => setVisible(false)

  const fetchMentors = async () => {
    try {
      const mentors = await Axios.get('/mentors/view')
      setMentors(mentors.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchMentors()
  }, [])

  const [viewMentor, setViewMentor] = useState<Mentor>({
    id: '',
    firstName: '',
    department: '',
    email: '',
    gender: '',
    Hobbies: { id: '', hobbies: '' },
    lastName: '',
    rank: '',
    staffNo: '',
    middleName: '',
    Skills: { id: '', skills: '' },
  })

  const viewModal = ({
    id,
    firstName,
    lastName,
    rank,
    Hobbies,
    Skills,
    department,
    email,
    gender,
    staffNo,
    middleName,
  }: Mentor) => {
    setViewMentor({
      id,
      firstName,
      lastName,
      rank,
      Hobbies,
      Skills,
      department,
      email,
      gender,
      staffNo,
      middleName,
    })
    onclick()
  }

  const requestMentorshipOnView = async () => {
    await Axios.post(`/mentor/${viewMentor.id}/request-mentor`, user.email, {
      withCredentials: true,
    })
  }

  const requestMentorship = async (id: string) => {
    const request = await Axios.post(
      `/mentor/${id}/request-mentor`,
      {
        studentEmail: user.email,
      },
      {
        withCredentials: true,
      }
    )

    if (request.data) {
      setAlertState(true)
      setAlertMessage(request.data)
      setTimeout(() => {
        setAlertState(false)
      }, 2000)
    } else if (request.data === 'Max Requests Reached') {
      setAlertState(true)
      setAlertMessage(request.data)
      setTimeout(() => {
        setAlertState(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="grid items-center mb-4">
        <span className="text-lg text-gray-900 flex items-center justify-around font-bold">
          Available Mentors
        </span>
      </div>

      <Modal show={visible} size="xl" onClose={onclose}>
        <Modal.Body>
          <div className="space-y-6 p-2">
            <div className="flex flex-col justify-center mb-4 border rounded-2xl shadow-lg items-start gap-5 p-6">
              <Avatar size="xl" className="m-auto" />
              <span className="font-semibold flex">
                Name:{' '}
                {viewMentor.firstName +
                  ' ' +
                  viewMentor.middleName +
                  ' ' +
                  viewMentor.lastName}
              </span>
              <span className="font-semibold">
                department: {viewMentor.department}
              </span>
              <span className="font-semibold">rank: {viewMentor.rank}</span>
              <span className="font-semibold">Email: {viewMentor.email}</span>
              <span className="font-semibold">Gender: {viewMentor.gender}</span>
              <span className="font-semibold">
                Staff No: {viewMentor.staffNo}
              </span>
              <span className="font-semibold">
                Hobbies: {viewMentor.Hobbies.hobbies.replace(/,/g, ', ')}
              </span>
              <span className="font-semibold">
                Skills: {viewMentor.Skills.skills}
              </span>
            </div>
          </div>
          <Button
            className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black hover:border-black m-auto"
            size="md"
            // outline={true}
            onClick={() => setVisible(false)}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>

      <Alert
        color={`${
          alertMessage === 'Request Sent'
            ? 'success'
            : alertMessage === 'Max Requests Reached'
            ? 'failure'
            : 'success'
        }`}
        onDismiss={function onDismiss() {
          setAlertState(false)
        }}
        className={`${alertState ? '' : 'hidden'} mb-4`}
      >
        <span>
          <span className="font-medium">{alertMessage}</span>
        </span>
      </Alert>

      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Profile</span>
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>department</Table.HeadCell>
          <Table.HeadCell>staff No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {mentors.map((mentor, id) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={id}
            >
              <Table.Cell>
                <Avatar rounded={true} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {mentor.firstName + ' ' + mentor.lastName}
              </Table.Cell>
              <Table.Cell>{mentor.email}</Table.Cell>
              <Table.Cell>{mentor.department}</Table.Cell>
              <Table.Cell>{mentor.staffNo}</Table.Cell>
              <Table.Cell>
                <Button
                  size="xs"
                  className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
                  onClick={() => viewModal(mentor)}
                >
                  View
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  color="success"
                  size="xs"
                  outline={true}
                  onClick={() => requestMentorship(mentor.id)}
                >
                  Send Request
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="grid items-center mb-6 mt-6">
        <span className="flex items-center justify-around text-lg text-gray-900 font-bold">
          Best Matched Mentors
        </span>
      </div>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Profile</span>
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>department</Table.HeadCell>
          <Table.HeadCell>staff No</Table.HeadCell>
          <Table.HeadCell>Compatibiliy Score</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              <Avatar rounded={true} />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>12</Table.Cell>
            <Table.Cell>
              <Button
                size="xs"
                className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
              >
                View
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="success" size="xs" outline={true}>
                Send Request
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              <Avatar rounded={true} />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>
              <Button
                size="xs"
                className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
              >
                View
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="success" size="xs" outline={true}>
                Send Request
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Tooltip
        placement="left"
        content="Shows the 2 most compatible mentors for you based on the matching system"
      >
        <Button
          className="mt-6 mb-4 bg-[#25425F] text-white border-2 border-[#25425F] hover:bg-[#25425F] outline-none"
          outline={true}
        >
          <AiOutlineSearch className="mr-2 h-5 w-5" />
          Find Match
        </Button>
      </Tooltip>
    </div>
  )
}
export default SearchMentors
