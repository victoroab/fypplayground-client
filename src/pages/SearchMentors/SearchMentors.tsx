import { Alert, Table, Button, Avatar, Tooltip, Modal } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Axios } from '../../config/axios'
import { useState, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'

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
  Hobbies: { hobbies: string }
  Skills: { skills: string }
}

export type RecommendedMentors = {
  id: string
  firstName: string
  middleName: string
  lastName: string
  gender: string
  email: string
  department: string
  staffNo: string
  rank: string
  similarityScore: number
  Hobbies: { hobbies: string }
  Skills: { skills: string }
}

const SearchMentors = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)
  // check if student has a mentor here

  const [mentors, setMentors] = useState<Mentor[]>([])
  const [recommendedMentors, setRecommendedMentors] = useState<
    RecommendedMentors[]
  >([])
  const [alertState, setAlertState] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const [visible, setVisible] = useState(false)
  const onclick = () => setVisible(true)
  const onclose = () => setVisible(false)

  const getMentors = async ({ studentEmail }: { studentEmail: string }) => {
    try {
      const mentors = await Axios.get('/mentors/view', {
        withCredentials: true,
        headers: { 'x-user': studentEmail },
      })
      if (mentors) {
        return mentors.data
      }
    } catch (e) {
      console.log(e)
    }
  }

  const postMutation = useMutation({
    mutationFn: getMentors,
    onSuccess: (data) => {
      setMentors(data)
    },
  })

  const useMatchingAlgorithm = async ({
    studentEmail,
  }: {
    studentEmail: string
  }) => {
    try {
      const result = await Axios.get('/test-algorithm', {
        withCredentials: true,
        headers: { 'x-user': studentEmail },
      })
      return result.data
    } catch (e) {
      console.log(e)
    }
  }

  const matchMutation = useMutation({
    mutationFn: useMatchingAlgorithm,
    onSuccess: (data) => {
      setRecommendedMentors(data)
    },
  })

  useEffect(() => {
    postMutation.mutate(userData?.email)
  }, [])

  const [viewMentor, setViewMentor] = useState<Mentor>({
    id: '',
    firstName: '',
    department: '',
    email: '',
    gender: '',
    Hobbies: { hobbies: '' },
    lastName: '',
    rank: '',
    staffNo: '',
    middleName: '',
    Skills: { skills: '' },
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
  }: Mentor | RecommendedMentors) => {
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

  const requestMentorship = async (id: string) => {
    const request = await Axios.post(
      `/mentor/${id}/request-mentor`,
      {
        studentEmail: userData.email,
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
        {/* {mentors ? (
          <span className="flex items-center justify-around text-lg text-gray-900 font-bold">
            Mentors
          </span>
        ) : (
          'You have a mentor'
        )} */}
        <span className="flex items-center justify-around text-lg text-gray-900 font-bold">
          Mentors
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
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
            color=""
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
          {mentors?.map((mentor, id) => (
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
                  color=""
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
        {mentors ? (
          <span className="flex items-center justify-around text-lg text-gray-900 font-bold">
            Recommended Mentors
          </span>
        ) : (
          ''
        )}
      </div>

      {mentors ? (
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>
              <span className="sr-only">Profile</span>
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>department</Table.HeadCell>
            <Table.HeadCell>staff No</Table.HeadCell>
            <Table.HeadCell>Similarity Score /100</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {recommendedMentors.map((mentor) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={mentor.id}
              >
                <Table.Cell>
                  <Avatar rounded={true} />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {mentor.firstName} {mentor.lastName}
                </Table.Cell>
                <Table.Cell>{mentor.email}</Table.Cell>
                <Table.Cell>{mentor.department}</Table.Cell>
                <Table.Cell>{mentor.staffNo}</Table.Cell>
                <Table.Cell>{mentor.similarityScore}</Table.Cell>
                <Table.Cell>
                  <Button
                    size="xs"
                    className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
                    color=""
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
      ) : (
        ''
      )}

      {mentors ? (
        <Tooltip
          placement="left"
          content="Shows the 2 most compatible mentors for you based on the mentor matching system"
        >
          <Button
            className="mt-6 mb-4 bg-[#25425F] text-white border-2 border-[#25425F] hover:bg-[#25425F] outline-none"
            outline={true}
            color=""
            onClick={() => matchMutation.mutate(userData?.email)}
          >
            <AiOutlineSearch className="mr-2 h-5 w-5" />
            Find Match
          </Button>
        </Tooltip>
      ) : (
        ''
      )}
    </div>
  )
}
export default SearchMentors
