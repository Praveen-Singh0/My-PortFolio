import myImage from '../assets/Mainphoto.jpg';
const About = () => {
  return (
    <div className=" mt-16 mx-auto px-4 py-12">
      {/* Hero Image Section */}
      <h1 className="text-center text-3xl font-bold mb-6">
        About <span className="text-red-500">Section</span>
      </h1>


      <div className="relative w-full h-80">
        {/* Background Image with Gradient */}

        <img
          src={myImage}
          alt="Product on desk"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Gradient Overlay for Fading Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-100 rounded-lg"></div>

        {/* Text Overlay */}
        <div className="h-screen absolute inset-0 pt-44 sm:p-0 sm:flex flex-col justify-center items-center text-black">
          <h2 className="text-3xl font-bold">Praveen Singh (Developer)</h2>
          <p className="text-gray-700 mt-2 max-w-md text-center">
          Front-End Developer with hands-on experience in building responsive, user-friendly web applications using modern technologies like React, Ant Design, and Tailwind CSS. With a solid foundation in HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      <div className="m-8 sm:shadow relative text-center sm:mt-16">
        {/* Polygon Clip Element */}
        <div className="absolute blur-3xl inset-x-0 bottom-0 flex justify-center">
          <div
            className="w-[36.125rem] sm:aspect-[1155/678] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:w-[62.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}></div>
        </div>

        <div className="relative">
          <div className="pt-8 border-t border-gray-300">
            <dl className="divide-y divide-gray-500">
              <div className="sm:flex justify-between ">
                <div className="sm:divide-x divide-gray-500 sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className=" font-medium text-gray-900">Full name</dt>
                  <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">Praveen Singh</dd>
                </div>
                <div className="sm:divide-x divide-gray-500 sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className=" font-medium text-gray-900">Specialization for</dt>
                  <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">Front-End-Developer</dd>
                </div>
                <div className="sm:divide-x divide-gray-500 sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className=" font-medium text-gray-900">Email address</dt>
                  <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">parnbartwal@gmail.com</dd>
                </div>
              </div>

              <div className="flex borders justify-center mt-6 sm:mx-36">
                <div className="sm:divide-x divide-gray-500 w-full sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-0">
                  <dt className=" font-medium text-gray-900">Education</dt>
                  <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">Post-Graduate</dd>
                </div>

                <div className="sm:divide-x divide-gray-500 w-full sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-0">
                  <dt className=" font-medium text-gray-900">Salary expectation</dt>
                  <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">$_As_much_i_deserve</dd>
                </div>
              </div>

              <div className="sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className=" font-medium text-gray-900">About Past Experience</dt>
                <dd className="mt-1  text-gray-700 sm:col-span-2 sm:mt-0">
                <strong>Hey i am Praveen And </strong> With 6 months of professional experience as a Junior Software Developer, i had successfully contributed to multiple projects, including a Student Information System (SIS). This project involved implementing front-end design improvements, integrating APIs, performing CRUD operations, and utilizing Moodle for Learning Management System (LMS) features.
                </dd>
              </div>

              <div className="sm:px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className=" font-medium text-gray-900">Attachments</dt>
                <dd className="mt-2  text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <span className="ml-4 truncate font-medium">resume_full_stack_developer.pdf</span>
                        <span className="shrink-0 text-gray-400 ml-2">2.4mb</span>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a href="/Resume.pdf" target='_blank'
                          className="font-medium text-indigo-600 hover:text-indigo-500">view</a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <span className="ml-4 truncate font-medium">coverletter_full_stack_developer.pdf</span>
                        <span className="shrink-0 text-gray-400 ml-2">4.5mb</span>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a href="" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
