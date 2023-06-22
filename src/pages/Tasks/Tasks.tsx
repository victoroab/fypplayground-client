import { Button, Table, Badge, Spinner } from 'flowbite-react'
import { HiCheck, HiClock } from 'react-icons/hi'
import { Axios } from '../../config/axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const Tasks = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)

  const queryClient = useQueryClient()

  const getTasks = async () => {
    try {
      const tasks = await Axios.get('/mentee/get-tasks', {
        withCredentials: true,
        headers: { 'x-user': userData?.email },
      })
      return tasks.data
    } catch (e) {
      console.log(e)
    }
  }

  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const completeTask = async ({ id, date }: { id: string; date: string }) => {
    try {
      const result = await Axios.post(
        '/mentee/complete-task',
        {
          studentEmail: userData?.email,
          taskId: id,
          completedDate: date,
        },
        { withCredentials: true }
      )

      return result
    } catch (e) {
      console.log(e)
    }
  }

  const completeMutation = useMutation({
    mutationFn: completeTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  return (
    <div className="min-h-screen">
      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell>S/N</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Created_at</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tasksQuery.data
            ?.sort((a: any, b: any) => {
              Date.parse(a.created_at) - Date.parse(b.created_at)
            })
            .map((task: any, i: any) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={i}
              >
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {task.title}
                </Table.Cell>
                <Table.Cell>{task.created_at}</Table.Cell>
                <Table.Cell>
                  {task.completed !== '' ? (
                    <Badge icon={HiCheck} className="w-2/5 pr-3 font-bold">
                      <span className="ml-3 font-bold">Yes</span>
                    </Badge>
                  ) : (
                    <Badge
                      icon={HiClock}
                      className="w-2/5 pr-3 font-bold"
                      color="warning"
                    >
                      <span className="ml-3 font-bold">In Progress</span>
                    </Badge>
                  )}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>
                  <Button
                    size="xs"
                    color="gray"
                    outline={true}
                    onClick={() =>
                      completeMutation.mutate({
                        id: task.id,
                        date: new Date().toDateString(),
                      })
                    }
                  >
                    Mark as Complete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  )
}
export default Tasks
