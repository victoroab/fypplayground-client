import { Table, Avatar, Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../../config/axios'

const MenteesTable = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)

  const navigate = useNavigate()
  const [students, setStudents] = useState<any[]>([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const response = await Axios.post(
        '/mentor/get-students',
        { mentorEmail: userData?.email },
        { withCredentials: true }
      )

      setStudents(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="min-h-screen">
      <span className="text-lg text-gray-900 flex items-center justify-around font-bold mb-4">
        My Students
      </span>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Profile</span>
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {students?.map((student) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={student.id}
            >
              <Table.Cell>
                <Avatar rounded={true} />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {student.firstName} {student.lastName}
              </Table.Cell>
              <Table.Cell>{student.email}</Table.Cell>
              <Table.Cell>{student.matricNo}</Table.Cell>
              <Table.Cell>
                <Button
                  size="xs"
                  className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
                  color=""
                  onClick={() => navigate(`/workspace/m/mentees/${student.id}`)}
                >
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
export default MenteesTable
