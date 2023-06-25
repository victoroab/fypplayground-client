import { Axios } from '../../config/axios'
import { Alert, Avatar, Button, Table } from 'flowbite-react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Auth/AuthProvider'

type MentorRequestData = {
  mentorshipRequests: [
    {
      student: {
        id: string
        firstName: string
        lastName: string
        middleName: string
        email: string
        matricNo: string
      }
    }
  ]
}

const studentsRequests = () => {
  // const user = {
  //   email: 'mentor1@gmail.com',
  // }

  // const { session } = useContext(AuthContext)
  // const sessionData = JSON.parse(session)
  // const { user } = sessionData

  const userData = JSON.parse(localStorage.getItem('userData')!)

  const [mount, setMount] = useState(false)
  const [students, setStudents] =
    useState<MentorRequestData['mentorshipRequests']>()

  const fetcher = async () => {
    try {
      const requests = await Axios.post(
        '/mentor/get-mentorship-requests',
        { mentorEmail: userData?.email },
        { withCredentials: true }
      )
      setStudents(requests.data['mentorshipRequests'])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetcher()
  }, [mount])

  const acceptRequest = async (studentId: string) => {
    const request = await Axios.post(
      `/mentee/${studentId}/accept-mentee`,
      { mentorEmail: userData?.email },
      { withCredentials: true }
    )

    setMount((prev) => !prev)
  }

  return (
    <div className="min-h-screen">
      <div className="grid items-center mb-4">
        <span className="text-lg text-gray-900 flex items-center justify-around font-bold">
          All Requests
        </span>
      </div>
      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="sr-only"></Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {students?.map((student, id) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={id}
              >
                <Table.Cell>
                  <Avatar rounded={true} />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {student.student.firstName + ' ' + student.student.lastName}
                </Table.Cell>
                <Table.Cell>{student.student.email}</Table.Cell>
                <Table.Cell>{student.student.matricNo}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="success"
                    outline={true}
                    onClick={() => acceptRequest(student.student.id)}
                  >
                    Accept
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button color="failure" outline={true}>
                    Decline
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
export default studentsRequests
