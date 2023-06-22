import Upload from '../../components/Upload/Upload'
import Messages from '../../components/Messages/Messages'
import AuthClient from '../../Auth/AuthClient'
import { Button, Card } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'

const Actions = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-wrap items-start my-auto gap-6 p-3">
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Upload File/Image</span>{' '}
          <Button
            size="xs"
            // color="gray"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            onClick={() => navigate('/workspace/actions/upload')}
            color=""
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Message Mentor</span>{' '}
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            onClick={() => navigate('/workspace/actions/message')}
            color=""
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Schedule Event</span>{' '}
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            color=""
            onClick={() => navigate('/workspace/actions/schedules')}
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">View Tasks</span>{' '}
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            color=""
            onClick={() => navigate('/workspace/actions/tasks')}
          >
            {'>'}
          </Button>
        </Card>
      </div>
    </div>
  )
}
export default Actions
