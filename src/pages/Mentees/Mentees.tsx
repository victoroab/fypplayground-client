import { Avatar, Badge, Button, Card, Checkbox, Tooltip } from 'flowbite-react'
import { CChart } from '@coreui/react-chartjs'
import { HiCheck } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Axios } from '../../config/axios'
import { AuthContext } from '../../Auth/AuthProvider'

const Mentees = () => {
  const { studentId } = useParams()
  // const { session } = useContext(AuthContext)
  // const sessionData = JSON.parse(session)
  // const { user } = sessionData

  const userData = JSON.parse(localStorage.getItem('userData')!)

  const [student, setStudent] = useState<any[]>([])

  useEffect(() => {
    fetchStudent()
  }, [])

  const fetchStudent = async () => {
    try {
      const response = await Axios.post(
        '/mentor/get-student-by-id',
        { studentId: studentId },
        { withCredentials: true }
      )
      setStudent([response.data])
    } catch (e) {
      console.log(e)
    }
  }

  console.log(student)

  return (
    <div className="min-h-[86.7vh]">
      <div className="flex mb-4 flex-col">
        <div className="flex flex-col w-full justify-start items-center rounded-2xl bg-white dark:bg-gray-100 p-4 mr-6">
          <div className="flex flex-col w-full self-start mr-6">
            <span className="flex self-center font-bold mb-4">Bio</span>
            {student.map((student, id) => (
              <div
                className="flex justify-around mb-2 border rounded-2xl shadow-lg gap-4 p-4"
                key={id}
              >
                <Avatar size="lg" />
                <div className="flex flex-col gap-3 justify-start items-start">
                  <span className="font-bold ">
                    Name:{' '}
                    <span className="font-semibold">
                      {`${
                        student.firstName +
                        ' ' +
                        student.middleName +
                        ' ' +
                        student.lastName
                      }`}
                    </span>
                  </span>
                  {/* <span className="font-bold">
                    Course: <span className="font-semibold">MIS</span>
                  </span>
                  <span className="font-bold">
                    Level: <span className="font-semibold">400</span>
                  </span> */}
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                  <span className="font-bold ">
                    Matric No:{' '}
                    <span className="font-semibold">{student.matricNo}</span>
                  </span>
                  <span className="font-bold">
                    Email:{' '}
                    <span className="font-semibold">{student.email}</span>
                  </span>
                  <span className="font-bold">
                    Gender:{' '}
                    <span className="font-semibold">{student.gender}</span>{' '}
                  </span>
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                  <span className="font-bold">
                    Ethnicity:{' '}
                    <span className="font-semibold">{student.ethnicity}</span>{' '}
                  </span>
                  <span className="font-bold">
                    Hobbies:{' '}
                    <span className="font-semibold">
                      {student.Hobbies.hobbies
                        .split(',')
                        .map((hobbie: any) => `${hobbie + ',' + ' '}`)}
                    </span>
                  </span>
                  <span className="font-bold">
                    Skills:{' '}
                    <span className="font-semibold">
                      {student.Skills.skills
                        .split(',')
                        .map((skill: any) => `${skill + ',' + ' '}`)}
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                  {/* <span className="font-bold">
                    Class: <span className="font-semibold">First</span>{' '}
                  </span> */}
                  <span className="font-bold">
                    Days Available:{' '}
                    <span className="font-semibold">
                      {student.Availability.days
                        .split(',')
                        .map((day: any) => `${day + ',' + ' '}`)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full">
        {/* <div className="flex mr-4 align-center mb-4 rounded-2xl bg-white dark:bg-gray-200 w-1/3 flex-col p-4">
          <span className="mb-4 font-bold text-gray-900 self-center">
            Mentorship Info
          </span>
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
              <span className="font-semibold">0 Meetings</span>
            </span>
          </Card>
          <span className="flex gap-2 justify-around">
            <Button size="xs" color="dark" outline={true}>
              Schedule Meeting
            </Button>
            <Button size="xs" outline={true}>
              Send Message
            </Button>
            <Button size="xs" color="failure" outline={true}>
              Remove Mentee
            </Button>
          </span>
        </div> */}
        <div className="flex align-center mb-4 rounded-2xl bg-white dark:bg-gray-200 w-full flex-col p-4">
          <span className="flex self-center font-bold mb-4">
            Student's Tasks
          </span>
          <div className="flex w-full">
            <div className="w-2/3">
              <Card className="h-16 mb-4 hover:bg-gray-50">
                <span className="text-l flex items-center justify-between font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                  <Badge icon={HiCheck} />
                </span>
              </Card>
            </div>
            <div
              id="dash-r1"
              className="flex flex-col w-1/3 mb-3 h-64 items-center rounded-2xl bg-white dark:bg-gray-100 p-2"
            >
              <span className="mb-2 text-lg text-gray-900 font-bold">
                Tasks Overview
              </span>

              <CChart
                type="pie"
                height={250}
                width={200}
                data={{
                  labels: ['completed', 'pending'],
                  datasets: [
                    {
                      backgroundColor: ['#34495E', '#85929E'],
                      data: [60, 40],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mentees
