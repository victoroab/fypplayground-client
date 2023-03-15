import { Table, Avatar, Button, Card, Checkbox } from 'flowbite-react'
import { CChart } from '@coreui/react-chartjs'

const Mentees = () => {
  return (
    <div className="min-h-screen">
      <div className="flex mb-4 flex-col">
        <div className="flex flex-col w-full justify-start items-center rounded-2xl bg-white dark:bg-gray-100 p-4 mr-6">
          <div className="flex flex-col w-full self-start mr-6">
            <span className="flex self-center font-bold mb-4">Bio</span>
            <div className="flex justify-around mb-2 border rounded-2xl shadow-lg gap-4 p-4">
              <Avatar size="lg" />
              <div className="flex flex-col gap-3 justify-start items-start">
                <span className="font-bold ">
                  Name: Victor Oluwaseyi Balogun
                </span>
                <span className="font-bold">Course: MIS</span>
                <span className="font-bold">Level: 400 </span>
              </div>
              <div className="flex flex-col gap-3 justify-start items-start">
                <span className="font-bold ">Matric No: 19CH026505</span>
                <span className="font-bold">Email: papioab@gmail.com</span>
                <span className="font-bold">Gender: Male </span>
              </div>
              <div className="flex flex-col gap-3 justify-start items-start">
                <span className="font-bold">Ethnicity: Yoruba </span>
                <span className="font-bold">Hobbies: Cooking</span>
                <span className="font-bold">Skills: Fullstack Dev</span>
              </div>
              <div className="flex flex-col gap-3 justify-start items-start">
                <span className="font-bold">Class: First </span>
                <span className="font-bold">
                  Days Available: Mon Tue Wed Thu Fri Sat
                </span>
                <span className="font-bold">Phone No: 123456789</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex mr-4 align-center mb-4 rounded-2xl bg-white dark:bg-gray-200 w-1/3 flex-col p-4">
          <span className="mb-4 font-bold text-gray-900 self-center">
            Mentorship Info
          </span>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              <span>Duration:</span>
              {/* <Button size="xs" color="dark" outline={true}>
              Set Duration
            </Button> */}
              <span className="font-semibold">3 Months</span>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              <span>Date Started:</span>

              <span className="font-semibold">15-03-2023</span>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              <span>Finish Date:</span>

              <span className="font-semibold">14-06-2023</span>
            </span>
          </Card>
          <Card className="h-16 mb-4 hover:bg-gray-50">
            <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
              <span>Meetings Held: </span>
              {/* <Button size="xs" color="dark" outline={true}>
              Schedule Meeting
            </Button> */}
              <span className="font-semibold">0 Meetings</span>
            </span>
          </Card>
          <span className="flex justify-around">
            <Button size="md" color="dark" outline={true}>
              Schedule Meeting
            </Button>
            <Button size="md" outline={true}>
              Send Message
            </Button>
            <Button size="md" color="failure" outline={true}>
              Remove Mentee
            </Button>
          </span>
        </div>
        <div className="flex align-center mb-4 rounded-2xl bg-white dark:bg-gray-200 w-2/3 flex-col p-4">
          <span className="flex self-center font-bold mb-4">
            Mentee's Tasks
          </span>
          <div className="flex w-full">
            <div className="flex align-center h-96 mb-4 rounded-2xl bg-white dark:bg-gray-200 w-2/3 flex-col overflow-y-scroll p-6">
              <Card className="h-16 mb-4 hover:bg-gray-50">
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                  <Checkbox defaultChecked={true} disabled />
                </span>
              </Card>
              <Card className="h-16 mb-4 hover:bg-gray-50">
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                  <Checkbox disabled />
                </span>
              </Card>
              <Card className="h-16 mb-4 hover:bg-gray-50">
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                  <Checkbox disabled />
                </span>
              </Card>
              <Card className="h-16 mb-4 hover:bg-gray-50">
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                  <Checkbox defaultChecked={true} disabled />
                </span>
              </Card>
            </div>
            <span className="w-1/3">
              <CChart
                type="pie"
                height={250}
                width={200}
                data={{
                  labels: ['completed', 'pending'],
                  datasets: [
                    {
                      backgroundColor: ['#34495E', '#85929E'],
                      data: [50, 50],
                    },
                  ],
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mentees

/**
 * 
 * <div className="grid items-center mb-4">
        <span className="text-lg text-gray-900 flex items-center justify-around font-bold">
          My Mentees{' '}
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
 */
