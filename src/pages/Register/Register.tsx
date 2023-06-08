import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { TextInput, Card, Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
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
                <div className="flex items-center mb-20 text-4xl font-semibold text-white mt-5">
                  Register
                </div>

                <section className="w-full p-4 rounded-md overflow-x-scroll">
                  <Button
                    className="mb-6"
                    size={'sm'}
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
                              name="firstname"
                              id="firstname"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="name@company.com"
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
                              name="lastname"
                              id="lastname"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="name@company.com"
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
                              name="email"
                              id="email"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="name@company.com"
                              required
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
                              name="phone"
                              id="phone"
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
                          Personalty
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="agerange"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Temperness
                            </label>
                            <input
                              type="text"
                              name="agerange"
                              id="agerange"
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
                          Create account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="••••••••"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              name="confirm-password"
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

                    {/* <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                          Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Your email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="name@company.com"
                              required
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
                              name="password"
                              id="password"
                              placeholder="••••••••"
                              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                              required
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
                              name="confirm-password"
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
                                className="font-lighttext-gray-300"
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
                            Create an account
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
                    </div> */}
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
