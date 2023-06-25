import { Table, Avatar, Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const MenteesTable = () => {
  const navigate = useNavigate()
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
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
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
            <Table.Cell>
              <Button
                size="xs"
                className="bg-[#25425F] text-white hover:bg-white border-2 border-b-4 hover:text-[#6E8498] border-[#25425F] hover:border-[#6E8498]"
                color=""
                onClick={() => navigate('/workspace/m/mentees/:studentId')}
              >
                View
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
export default MenteesTable
