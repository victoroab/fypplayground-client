import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Register = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Navbar />
        <main className="space-y-40">
          <div className="relative" id="home">
            <div
              aria-hidden="true"
              className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
            >
              <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="relative pt-36 ml-auto">
                <span className="text-white">DOCK HERE</span>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
export default Register
