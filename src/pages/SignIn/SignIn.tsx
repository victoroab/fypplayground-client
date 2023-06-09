import { supabase } from '../../config/supabase'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

type SignInData = {
  email: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<any>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>()

  const onSubmit: SubmitHandler<SignInData> = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })

    if (data.session) {
      navigate('/workspace')
    }

    if (error) {
      setError(error)
    }
  }

  // const signIn = async () => {
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email: 'konjidaddy12@gmail.com',
  //   password: 'br0@db1s3',
  // })

  //   if (error) {
  //     console.log(error)
  //   }

  //   navigate('/workspace')
  // }
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <div className="max-w-8xl w-full px-4 md:px-12 xl:px-6">
            <div className="relative flex flex-col w-full justify-between p-1">
              <div className="flex items-center mb-20 text-4xl font-semibold text-white mt-20"></div>
              <div className="w-full mx-auto rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                    Sign In
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@email.com"
                        required
                        {...register('email')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        required
                        {...register('password')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-[#25425F] hover:bg-[#6E8498] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                    >
                      Sign In
                    </button>

                    {/* <span className="text-gray-400 text-sm">
                      {!error ? '' : error.AuthApiError}
                    </span> */}
                    <p className="text-sm font-light text-gray-400">
                      Don't have an account?{' '}
                      <a
                        href="#"
                        className="font-medium hover:underline text-primary-500"
                      >
                        Sign up here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignIn
