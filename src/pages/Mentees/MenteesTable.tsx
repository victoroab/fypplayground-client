import { Table, Avatar, Button } from 'flowbite-react'

const MenteesTable = () => {
  return (
    <div className="min-h-screen">
      <span className="text-lg text-gray-900 flex items-center justify-around font-bold mb-2">
        My Mentees{' '}
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
              <Button size="xs" outline={true}>
                Send Message
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" color="failure" outline={true}>
                Remove
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
            <Table.Cell>
              <Button
                size="xs"
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black hover:border-black"
              >
                View
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" outline={true}>
                Send Message
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button size="xs" color="failure" outline={true}>
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
export default MenteesTable
