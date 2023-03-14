import { Alert, Avatar, Button, Table } from 'flowbite-react'

const MentorsRequests = () => {
  return (
    <div className="min-h-screen">
      <div className="grid items-center mb-4">
        <span className="text-lg text-gray-900 flex items-center justify-around font-bold">
          All Requests
        </span>
      </div>
      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="sr-only">Profile</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
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
            <Table.Cell>
              <Button
                size="xs"
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black hover:border-black"
              >
                View
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="success" outline={true} size="xs">
                Accept
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="failure" outline={true} size="xs">
                Decline
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
export default MentorsRequests
