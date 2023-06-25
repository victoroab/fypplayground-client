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
  password: string
  confirmPassword: string
  maritalStatus: string
  expertiseInField: string
  degreesObtained: string
  communicationChannel: string
  communicationStyle: string
  empathy1: number
  empathy2: number
  empathy3: number
  communication1: number
  communication2: number
  communication3: number
  patience1: number
  patience2: number
  patience3: number
  openMindedness1: number
  openMindedness2: number
  openMindedness3: number
  adaptability1: number
  adaptability2: number
  adaptability3: number
  leadership1: number
  leadership2: number
  leadership3: number
  accountability1: number
  accountability2: number
  accountability3: number
  problemSolving1: number
  problemSolving2: number
  problemSolving3: number
  resilience1: number
  resilience2: number
  resilience3: number
  trustworthiness1: number
  trustworthiness2: number
  trustworthiness3: number
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
          hobbies: formData.hobbies.split(','),
          skills: formData.skills.split(','),
          availability: formData.availability.split(','),
          accountability: Number(
            (
              (parseInt(formData.accountability1.toString()) +
                parseInt(formData.accountability2.toString()) +
                parseInt(formData.accountability3.toString())) /
              30
            ).toFixed(2)
          ),
          adaptability: Number(
            (
              (parseInt(formData.adaptability1.toString()) +
                parseInt(formData.adaptability2.toString()) +
                parseInt(formData.adaptability3.toString())) /
              30
            ).toFixed(2)
          ),
          communication: Number(
            (
              (parseInt(formData.communication1.toString()) +
                parseInt(formData.communication2.toString()) +
                parseInt(formData.communication3.toString())) /
              30
            ).toFixed(2)
          ),
          empathy: Number(
            (
              (parseInt(formData.empathy1.toString()) +
                parseInt(formData.empathy2.toString()) +
                parseInt(formData.empathy3.toString())) /
              30
            ).toFixed(2)
          ),
          leadership: Number(
            (
              (parseInt(formData.leadership1.toString()) +
                parseInt(formData.leadership2.toString()) +
                parseInt(formData.leadership3.toString())) /
              30
            ).toFixed(2)
          ),
          openMindedness: Number(
            (
              (parseInt(formData.openMindedness1.toString()) +
                parseInt(formData.openMindedness2.toString()) +
                parseInt(formData.openMindedness3.toString())) /
              30
            ).toFixed(2)
          ),
          patience: Number(
            (
              (parseInt(formData.patience1.toString()) +
                parseInt(formData.patience2.toString()) +
                parseInt(formData.patience3.toString())) /
              30
            ).toFixed(2)
          ),
          problemSolving: Number(
            (
              (parseInt(formData.problemSolving1.toString()) +
                parseInt(formData.problemSolving2.toString()) +
                parseInt(formData.problemSolving3.toString())) /
              30
            ).toFixed(2)
          ),
          resilience: Number(
            (
              (parseInt(formData.resilience1.toString()) +
                parseInt(formData.resilience2.toString()) +
                parseInt(formData.resilience3.toString())) /
              30
            ).toFixed(2)
          ),
          trustworthiness: Number(
            (
              (parseInt(formData.trustworthiness1.toString()) +
                parseInt(formData.trustworthiness2.toString()) +
                parseInt(formData.trustworthiness3.toString())) /
              30
            ).toFixed(2)
          ),
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

    // const response = await signUp(formData)
    // console.log(response?.data)
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="w-full px-4 md:px-12 xl:px-6">
          <div className="relative flex flex-col justify-between p-1">
            <div className="flex items-center justify-center mb-8 ml-9 text-4xl font-semibold text-white mt-5">
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
            </div>

            <section className="p-4 rounded-md">
              <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <div className="flex w-full overflow-y-auto flex-col items-center justify-center gap-6 px-6 lg:py-0">
                  {/* Personal Information */}
                  <div className="rounded-lg w-full shadow h-auto md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 w-full space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Personal Information
                      </h1>
                      <div className="space-y-4 w-full md:space-y-6">
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
                            htmlFor="hdo"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Highest degree obtained
                          </label>
                          <input
                            type="text"
                            id="hdo"
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('degreesObtained')}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="maritalStatus"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Marital Status
                          </label>
                          <input
                            type="text"
                            id="maritalStatus"
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('maritalStatus')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Menorship Information */}
                  <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Institution Information
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
                      </div>
                    </div>
                  </div>

                  {/* Mentorship Information */}
                  <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Mentorship Information
                      </h1>
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <label
                            htmlFor="cstyle"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Communication Style
                          </label>
                          <input
                            type="text"
                            id="cstyle"
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder=""
                            required
                            {...register('communicationStyle')}
                          />
                        </div>
                      </div>
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <label
                            htmlFor="cchannel"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Preferred Communication Medium
                          </label>
                          <input
                            type="text"
                            id="cchannel"
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder=""
                            required
                            {...register('communicationChannel')}
                          />
                        </div>
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
                          htmlFor="eif"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Years of Expertise
                        </label>
                        <input
                          type="text"
                          id="expertiseInField"
                          className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                          placeholder=""
                          {...register('expertiseInField')}
                        />
                      </div>
                    </div>
                  </div>

                  {/*Personality Information */}
                  <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl mb-4 font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Personalty Information
                      </h1>

                      <div className="space-y-4 mb-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Empathy
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How well do you understand and consider other
                            people's emotions?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('empathy1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How often do you actively listen to others
                            without interrupting or judging?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('empathy2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent do you try to see situations from
                            others' perspectives?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('empathy3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Communication
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How effectively do you convey your thoughts and
                            ideas to others?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('communication1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How comfortable are you with public speaking or
                            presenting information?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('communication2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. How often do you seek clarification and provide
                            feedback in conversations?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('communication3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Patience
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How well do you handle delays or unexpected
                            obstacles without getting frustrated?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('patience1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How often do you give others enough time to
                            express themselves without rushing them?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('patience2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent are you able to maintain a calm
                            demeanor in stressful situations?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('patience3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Open Mindedness
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How receptive are you to different opinions and
                            ideas?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('openMindedness1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How willing are you to consider alternative
                            approaches to problem-solving?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('openMindedness2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent do you actively seek out diverse
                            perspectives and experiences?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('openMindedness3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Adaptability
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How well do you adjust to changes in plans or
                            unexpected circumstances?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('adaptability1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How comfortable are you in new or unfamiliar
                            situations?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('adaptability2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. How easily do you embrace and navigate through
                            transitions?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('adaptability3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Leadership
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How often do you take initiative and guide others
                            towards a shared goal?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('leadership1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How well do you inspire and motivate others to
                            achieve their best?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('leadership2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent are you comfortable making
                            decisions and taking responsibility?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('leadership3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Accountability
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How consistently do you fulfill your commitments
                            and obligations?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('accountability1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How willing are you to take ownership of your
                            mistakes and learn from them?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('accountability2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent do you follow through on your
                            promises and meet deadlines?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('accountability3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Problem Solving
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How effectively do you analyze complex problems
                            and develop solutions?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('problemSolving1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How well do you approach challenges with a
                            proactive and solution-oriented mindset?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('problemSolving2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent do you seek out different
                            perspectives and evaluate potential outcomes?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('problemSolving3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Resilience
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How well do you bounce back from setbacks or
                            failures?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('resilience1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How optimistic and positive are you in the face
                            of challenges?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('resilience2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. How readily do you adapt and learn from difficult
                            experiences?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('resilience3')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 flex flex-col items-start justify-center md:space-y-6">
                        <span className="text-md self-center font-bold leading-tight tracking-tight md:text-xl text-white">
                          Trust Worthiness
                        </span>
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            1. How reliable and consistent are you in keeping
                            your commitments and promises?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('trustworthiness1')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            2. How transparent and honest are you in your
                            interactions with others?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('trustworthiness2')}
                          />
                        </div>

                        <div className="flex flex-col items-start gap-1 justify-center">
                          <label className="block text-sm font-medium text-white">
                            3. To what extent do others feel comfortable sharing
                            confidential information with you?
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={10}
                            className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                            {...register('trustworthiness3')}
                          />
                        </div>
                      </div>
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
    </div>
  )
}
export default RegisterMentor
