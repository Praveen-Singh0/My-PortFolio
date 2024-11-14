import { AiOutlineJavaScript, AiOutlineClose, AiFillLinkedin, AiFillGithub, } from "react-icons/ai";

const MainSection = () => {
  return (
    <div className="px-20 pt-20 md:pt-24 ">
      <div className="">
        <div className="relative isolate px-4 sm:px-6 lg:px-8">
          {/* Gradient backgrounds */}
          <div className="absolute inset-x-0 -top-40 -z-10 blur-2xl transform-gpu overflow-hidden sm:-top-80" aria-hidden="true">
            <div className="relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            ></div>
          </div>
          <div
            className="absolute blur-3xl -top-40 right-0 -z-10 transform-gpu overflow-hidden sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>


          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mx-auto max-w-7xl ">
            <div className="">
              <div className=" sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Connect me on LinkedIn. <a target="_blank" href="https://www.linkedin.com/in/praveen-singh-ba5656172/" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>

              <div className="py-6 text-center ">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Praveen Singh <br /> Full-Stack Software Developer</h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Hi, my name is Praveen. I’m a front-end developer with hands-on experience in building responsive and user-friendly web applications using React, Ant Design, and Tailwind CSS. </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                  target="_blank"
                    href="mailto:parnbartwal@gmail.com"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Hire Me
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
            <div className="parent max-[1500px]:w-9/12 max-lg:hidden ">
              <div className="imgCard">
                <div className="logo ">
                  <img src='/avatar1.JPG' alt="Avatar" className="rounded-full avatar" />
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5">
                    <AiOutlineJavaScript />
                  </span>
                </div>


                <div className="content ">
                  <span className="title">Connect with me</span>
                  <span className="text">Make, share, and use beautiful relationship <br />with Programming</span>
                </div>

                <div className="bottom">
                  <div className="social-buttons-container">
                    <button className="social-button social-button2"> <a target="_blank"  href="https://x.com/prvnBrTwal"><AiOutlineClose /></a></button>
                    <button className="social-button social-button3"> <a target="_blank"  href="https://www.linkedin.com/in/praveen-singh-ba5656172/"><AiFillLinkedin /></a></button>
                    <button className="social-button social-button3"><a  target="_blank" href="https://github.com/Praveen-Singh0"><AiFillGithub /></a></button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden  sm:top-[calc(100%-40rem)] max-[500px]:blur-2xl " aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
      </div>

    </div>
  );
};

export default MainSection;