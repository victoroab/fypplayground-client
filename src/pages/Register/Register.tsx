import { Axios } from '../../config/axios'
import { supabase } from '../../config/supabase'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignUpData = {
  email: string
  password: string
}

const Register = () => {
  const navigate = useNavigate()

  const [sucess, setSuccess] = useState('')

  const firstName = useRef<HTMLInputElement>(null)
  const middleName = useRef<HTMLInputElement>(null)
  const lastName = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const phoneNo = useRef<HTMLInputElement>(null)
  const age = useRef<HTMLInputElement>(null)
  const gender = useRef<HTMLInputElement>(null)
  const ethnicity = useRef<HTMLInputElement>(null)
  const matricNo = useRef<HTMLInputElement>(null)
  const areasOfInterest = useRef<HTMLInputElement>(null)
  const hobbies = useRef<HTMLInputElement>(null)
  const skills = useRef<HTMLInputElement>(null)
  const availability = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const confirmPassword = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>()

  const signUp = async (email: string) => {
    try {
      const request = await Axios.post(
        '/student/register',
        {
          firstName: firstName.current?.value,
          middleName: middleName.current?.value,
          lastName: lastName.current?.value,
          email,
          age: Number(age.current?.value),
          gender: gender.current?.value,
          ethnicity: ethnicity.current?.value,
          matricNo: matricNo.current?.value,
          areasOfInterest: areasOfInterest.current?.value.split(','),
          hobbies: hobbies.current?.value.split(','),
          skills: skills.current?.value.split(','),
          availability: availability.current?.value.split(','),
          password: password.current?.value,
          confirmPassword: confirmPassword.current?.value,
        },
        { withCredentials: true }
      )
      return request
    } catch (e) {
      console.log(e)
    }
  }

  const onPasswordSubmit: SubmitHandler<SignUpData> = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })

    if (data.user) {
      try {
        const result = await signUp(formData.email)
        setSuccess('true')
        navigate('/sign-in')
      } catch (e) {
        console.log(e)
      }
    }

    if (error) {
      console.log(error)
    }
  }

  console.log('Mounted')

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        {/* <Navbar /> */}
        <main className="space-y-40">
          <div className="relative" id="home">
            <div
              aria-hidden="true"
              className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
            >
              <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <div className="max-w-8xl w-full px-4 md:px-12 xl:px-6">
              <div className="relative flex flex-col w-full justify-between p-1">
                <div className="flex items-center mb-16 ml-9 text-4xl font-semibold text-white mt-5">
                  Register
                </div>

                <section className="w-full p-4 rounded-md overflow-x-scroll">
                  <Button
                    className="mb-6 ml-6"
                    size={'xs'}
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </Button>

                  <div className="flex items-start justify-start gap-4 px-6 mx-auto lg:py-0">
                    <div className="w-full rounded-lg shadow border h-auto md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Personal Information
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="firstname"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              id="firstname"
                              ref={firstName}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required

                              // onChange={(e) => handleChange(e)}
                              // value={payload.firstName}
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
                              name="middleName"
                              id="middleName"
                              ref={middleName}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              name="lastName"
                              id="lastName"
                              ref={lastName}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              // ref={email}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="name@company.com"
                              required
                              {...register('email')}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phoneNo"
                              id="phoneNo"
                              ref={phoneNo}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="00000000000"
                              required
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
                              type="text"
                              name="age"
                              id="age"
                              ref={age}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              name="gender"
                              id="gender"
                              ref={gender}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              name="gender"
                              id="ethnicity"
                              ref={ethnicity}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Mentorship Information
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="matricno"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Matric Number
                            </label>
                            <input
                              type="text"
                              name="matricno"
                              id="matricno"
                              ref={matricNo}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="aoi"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Areas of Interest
                            </label>
                            <input
                              type="text"
                              name="aoi"
                              id="aoi"
                              ref={areasOfInterest}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="AI, Research"
                              required
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
                              name="hobbies"
                              id="hobbies"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Swimming, Camping"
                              ref={hobbies}
                              required
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
                              name="skills"
                              id="skills"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Programming, UI/UX, Content Writing"
                              ref={skills}
                              required
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
                              name="availability"
                              id="availability"
                              ref={availability}
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Monday, Tuesday, Wednesday, Thursday, Friday"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Mentor Preferences
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="agerange"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Age Range
                            </label>
                            <input
                              type="text"
                              name="agerange"
                              id="agerange"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="20-30, 30-40, 40-50, 50-60"
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="mgender"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Gender
                            </label>
                            <input
                              type="text"
                              name="mgender"
                              id="mgender"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="teachingStyle"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Teaching Approach
                            </label>
                            <input
                              type="text"
                              name="teachingStyle"
                              id="teachingStyle"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Hands On, Lecture, Heuristic"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="teachingStyle"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Rank
                            </label>
                            <input
                              type="text"
                              name="rank"
                              id="rank"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Senior Lecturer, HOD"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Personalty Traits
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="temperness"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Temperness
                            </label>
                            <input
                              type="text"
                              name="agerange"
                              id="temperness"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="slider"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Create Account
                        </h1>
                        <form
                          className="space-y-4 md:space-y-6"
                          onSubmit={handleSubmit(onPasswordSubmit)}
                        >
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
                              type="confirm-password"
                              id="confirm-password"
                              placeholder="••••••••"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                            // onClick={(e) => signUp(e)}
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
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    </>
  )
}
export default Register
