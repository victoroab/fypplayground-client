import { Axios } from '../../config/axios'
import { supabase } from '../../config/supabase'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignUpData = {
  firstName: string
  lastName: string
  middleName: string
  email: string
  phoneNo: string
  age: number
  gender: string
  ethnicity: string
  staffNo: string
  department: string
  rank: string
  aoi: string
  hobbies: string
  skills: string
  availability: string
  temperness: number
  password: string
  confirmPassword: string
}

const RegisterMentor = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>()

  const signUp = async (formData: SignUpData) => {
    try {
      const request = await Axios.post(
        '/mentor/register',
        {
          ...formData,
          age: Number(formData.age),
          temperness: Number(formData.temperness),
          hobbies: formData.hobbies.split(','),
          skills: formData.skills.split(','),
          availability: formData.availability.split(','),
        },
        { withCredentials: true }
      )
      return request
    } catch (e) {
      console.log(e)
    }
  }

  const onSubmit: SubmitHandler<SignUpData> = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })

    if (data.user) {
      try {
        const response = await signUp(formData)
        if (response?.data.length > 1) {
          navigate('/sign-in')
        }
      } catch (e) {
        console.log(e)
      }
    }

    if (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <main>
        <div className="relative" id="home">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <div className="max-w-8sxl w-full px-4 md:px-12 xl:px-6">
            <div className="relative flex flex-col w-full justify-between p-1">
              <div className="flex items-center mb-8 ml-9 text-4xl font-semibold text-white mt-5">
                {/* Register */}
              </div>

              <section className="w-full p-4 rounded-md overflow-x-scroll">
                {/* <Button
                  className="mb-6 ml-6"
                  size={'xs'}
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Button> */}

                <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
                  <div className="flex items-center mb-8 justify-center sm:items-center sm:justify-center">
                    <img
                      src="/Group2.svg"
                      className="h-8 pr-2"
                      alt="Vomentor Logo"
                    />
                    <span className="self-center whitespace-nowrap text-4xl font-bold text-white">
                      Vomentor
                    </span>
                  </div>
                  <div className="flex items-start justify-start gap-4 px-6 mx-auto lg:py-0">
                    {/* Personal Information */}
                    <div className="w-full rounded-lg shadow border h-auto md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Personal Information
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('firstName')}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="middleName"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Middle Name
                            </label>
                            <input
                              type="text"
                              id="middleName"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('middleName')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="lastname"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('lastName')}
                            />
                          </div>

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
                              placeholder="name@company.com"
                              required
                              {...register('email')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phoneNo"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phoneNo"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="00000000000"
                              required
                              {...register('phoneNo')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="age"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Age
                            </label>
                            <input
                              type="number"
                              id="age"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('age')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="gender"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Gender
                            </label>
                            <input
                              type="text"
                              id="gender"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('gender')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="ethnicity"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Ethnicity
                            </label>
                            <input
                              type="text"
                              id="ethnicity"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('ethnicity')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*Menorship Information */}
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Mentorship Information
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                          <div>
                            <label
                              htmlFor="staffNo"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Staff Number
                            </label>
                            <input
                              type="text"
                              id="matricno"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('staffNo')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="department"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              department
                            </label>
                            <input
                              type="text"
                              id="department"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('department')}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="rank"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              rank
                            </label>
                            <input
                              type="text"
                              id="rank"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('rank')}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="aoi"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Specialization
                            </label>
                            <input
                              type="text"
                              id="aoi"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="AI, Research"
                              {...register('aoi')}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="hobbies"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Hobbies
                            </label>
                            <input
                              type="text"
                              id="hobbies"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Swimming, Camping"
                              required
                              {...register('hobbies')}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="skills"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Skills
                            </label>
                            <input
                              type="text"
                              id="skills"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Programming, UI/UX, Content Writing"
                              required
                              {...register('skills')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="availability"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Availability
                            </label>
                            <input
                              type="text"
                              id="availability"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Monday, Tuesday, Wednesday, Thursday, Friday"
                              required
                              {...register('availability')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Personality Traits */}
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Personalty Traits
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                          <div>
                            <label
                              htmlFor="temperness"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Temperness
                            </label>
                            <input
                              type="text"
                              id="temperness"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="slider"
                              required
                              {...register('temperness')}
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* Create Account */}
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Create Account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
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
                          <div>
                            <label
                              htmlFor="confirm-password"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Confirm password
                            </label>
                            <input
                              type="password"
                              id="confirmPassword"
                              placeholder="••••••••"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                              {...register('confirmPassword')}
                            />
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms"
                                aria-describedby="terms"
                                type="checkbox"
                                className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                required
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="terms"
                                className="font-light text-gray-300"
                              >
                                I accept the{' '}
                                <a
                                  className="font-medium text-primary-600 hover:underline text-primary-500"
                                  href="#"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="w-full text-white bg-[#25425F] hover:bg-[#6E8498] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                          >
                            Create account
                          </button>
                          <p className="text-sm font-light text-gray-400">
                            Already have an account?{' '}
                            <a
                              href="#"
                              className="font-medium hover:underline text-primary-500"
                            >
                              Login here
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default RegisterMentor
