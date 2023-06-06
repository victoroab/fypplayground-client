type Props = {
  className?: string
  message?: string
}

const MessageBox = ({ className, message }: Props) => {
  return (
    <div className={className}>
      <div className="bg-white min-h-[2.7rem] border rounded-lg p-1 w-52 flex items-center text-base font-semibold pl-4">
        <span>{message}</span>
      </div>
    </div>
  )
}
export default MessageBox
