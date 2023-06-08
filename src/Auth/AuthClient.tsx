import { useRef } from 'react'
import { supabase } from '../config/supabase'
import { Button, TextInput } from 'flowbite-react'

const AuthClient = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const input = inputRef.current?.value

  const registerMe = async (email: string | any) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: 'br0@db1s3',
    })

    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  // const enter = async () => {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: 'konjidaddy12@gmail.com',
  //     password: 'br0@db1s3',
  //   })

  //   if (error) {
  //     console.log(error)
  //   }

  //   console.log(data)
  // }

  return (
    <div>
      <span className="flex flex-col gap-4">
        <TextInput ref={inputRef} />
        <Button onClick={() => registerMe(input)}>Click to Register</Button>
        {/* <Button onClick={enter}>Login</Button> */}
      </span>
    </div>
  )
}
export default AuthClient
