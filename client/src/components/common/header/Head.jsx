import React from "react"

const Head = () => {
  return (
    <>
      <section className='head ml-20 mr-20'>
        <div className='container flexSB flex flex-row justify-between items-center'>
          <div className='logo'>
            <h1>StudentHub</h1>
            <span>Learn, Grow and Succeed</span>
          </div>

          <div>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">LogIn</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
