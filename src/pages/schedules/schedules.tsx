import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from 'flowbite-react'
import { useRef } from 'react'
import { Axios } from '../../config/axios'

const schedules = () => {
  const userData = JSON.parse(localStorage.getItem('userData')!)
  const titleRef = useRef<any>(null)
  const dateRef = useRef<any>(null)

  const queryClient = useQueryClient()

  const createSchedule = async () => {
    const response = await Axios.post(
      '/mentee/create-schedule',
      {
        studentEmail: userData.email,
        title: titleRef.current.value,
        date: dateRef.current.value,
      },
      { withCredentials: true }
    )
    return response
  }

  const scheduleMutation = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['schedules']),
        (titleRef.current.value = ''),
        (dateRef.current.value = '')
    },
  })

  return (
    <div className="min-h-screen">
      <section className="bg-white dark:bg-gray-900 rounded-md">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Create a Schedule
          </h2>
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Schedule Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type schedule title"
                  ref={titleRef}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="brand"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  ref={dateRef}
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="TV">Select Type</option>
                  <option value="TV">Meeting</option>
                  <option value="PC">Reminder</option>
                  <option value="PC">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="add"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Additional Details
                </label>
                <textarea
                  id="add"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <Button
              type="submit"
              size="md"
              className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498]  w-full mt-4 border-2"
              color=""
              onClick={() => scheduleMutation.mutate()}
            >
              Create Schedule
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
export default schedules
