import { Checkbox, Table, Button, Avatar, Tooltip } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchMentors = () => {
  return (
    <div className="min-h-screen">
      <div className="grid items-center mb-4">
        <span className="border text-lg text-gray-600 flex items-center justify-around font-semibold">
          Available Mentors
          <Button className="mt-6 mb-4" color="dark" outline={true}>
            <AiOutlineSearch className="mr-2 h-5 w-5 text-gray-600" />
            Search
          </Button>
        </span>
      </div>
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>
            <span className="sr-only">Profile</span>
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Matric No</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
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
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black"
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
            <Table.Cell>
              <Button
                size="xs"
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black"
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
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <Button
                size="xs"
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black"
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

      <div className="grid items-center mb-4 mt-6">
        <span className="flex items-center justify-around text-lg text-gray-600 font-semibold">
          Best Matched Mentors
          <Tooltip
            placement="left"
            content="Provides mentee with the 2 best mentors based on the matching system"
          >
            <Button className="mt-6 mb-4" color="dark" outline={true}>
              <AiOutlineSearch className="mr-2 h-5 w-5 text-gray-600" />
              Use Automated Matching
            </Button>
          </Tooltip>
        </span>
      </div>
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
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black"
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
            <Table.Cell>
              <Button
                size="xs"
                className="bg-black text-white hover:bg-white border-2 border-b-4 hover:text-black border-black"
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
    </div>
  )
}
export default SearchMentors
