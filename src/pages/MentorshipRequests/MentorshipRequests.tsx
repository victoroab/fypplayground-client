import { Alert, Avatar, Button, Table } from 'flowbite-react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Axios } from '../../config/axios'

type MentorRequestData = {
  mentorshipRequests: [
    {
      mentor: {
        id: string
        firstName: string
        lastName: string
        course: string
        email: string
        matricNo: string
      }
    }
  ]
}

const MentorshipRequests = () => {
  const [mount, setMount] = useState(false)

  const [alertState, setAlertState] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const [mentors, setMentors] =
    useState<MentorRequestData['mentorshipRequests']>()

  const fetcher = async () => {
    try {
      const requests = await Axios.get('a/u/mentee/get-mentorship-requests')
      setMentors(requests.data['mentorshipRequests'])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetcher()
  }, [mount])

  const deleteRequest = async (mentorId: string) => {
    const request = await Axios.post(
      `/a/u/mentee/${mentorId}/delete-mentorship-requests`,
      { menteeId: '4c228a98-a889-4e97-9ad8-1c8358041d4d' },
      { withCredentials: true }
    )

    if (request.data?.count === 1) {
      setAlertState(true)
      setAlertMessage('Request Deleted')
      setTimeout(() => {
        setAlertState(false)
      }, 2000)
    } else if (request.data?.count === 0) {
      setAlertState(true)
      setAlertMessage('Error, try later')
      setTimeout(() => {
        setAlertState(false)
      }, 2000)
    }

    setMount((prev) => !prev)
  }

  return (
    <div className="min-h-screen">
      <div className="grid items-center mb-4 mt-6">
        <span className="m-auto text-lg text-gray-600 font-semibold">
          Pending Request
        </span>
      </div>

      <Alert
        color={`${
          alertMessage === 'Request Deleted'
            ? 'success'
            : alertMessage === 'Error, try later'
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

      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="sr-only"></Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {mentors?.map((mentor, id) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={id}
              >
                <Table.Cell>
                  <Avatar rounded={true} />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {mentor.mentor.firstName + ' ' + mentor.mentor.lastName}
                </Table.Cell>
                <Table.Cell>{mentor.mentor.email}</Table.Cell>
                <Table.Cell>{mentor.mentor.course}</Table.Cell>
                <Table.Cell>{mentor.mentor.matricNo}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    outline={true}
                    onClick={() => deleteRequest(mentor.mentor.id)}
                  >
                    Cancel
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
export default MentorshipRequests
