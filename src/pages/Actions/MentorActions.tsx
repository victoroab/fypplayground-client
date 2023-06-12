import Upload from '../../components/Upload/Upload'
import Messages from '../../components/Messages/Messages'
import AuthClient from '../../Auth/AuthClient'
import { Dropdown, Button, Card, Select } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'

const MentorActions = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-wrap items-start my-auto gap-6 p-3">
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Upload File/Image</span>{' '}
          <Select>
            <option>storage</option>
            <option>Mentee 1</option>
            <option>Mentee 2</option>
            <option>Mentee 3</option>
          </Select>
          <Button
            size="xs"
            // color="gray"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            onClick={() => navigate('/workspace/m/actions/upload')}
            color=""
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Message Mentee</span>{' '}
          <Select>
            <option>Mentee 1</option>
            <option>Mentee 2</option>
            <option>Mentee 3</option>
          </Select>
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            onClick={() => navigate('/workspace/m/actions/message')}
            color=""
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">Schedule Meeting</span>{' '}
          <Select>
            <option>Mentee 1</option>
            <option>Mentee 2</option>
            <option>Mentee 3</option>
          </Select>
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            color=""
          >
            {'>'}
          </Button>
        </Card>
        <Card className="w-56 h-64 p-3 flex flex-col text-3xl font-bold text-gray-400">
          <span className="pb-6">View Tasks</span>
          <Select>
            <option>Mentee 1</option>
            <option>Mentee 2</option>
            <option>Mentee 3</option>
          </Select>
          <Button
            size="xs"
            className="bg-[#25425F] text-white hover:bg-white hover:text-[#6E8498] hover:border-[#6E8498] border-2"
            color=""
          >
            {'>'}
          </Button>
        </Card>
      </div>
    </div>
  )
}
export default MentorActions
