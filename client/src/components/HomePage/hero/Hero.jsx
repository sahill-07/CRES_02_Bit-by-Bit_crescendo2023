import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../../common/heading/Heading'
import './Hero.css'

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container ml-20'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education  Expertise' />
            <p className='text-lg mt-3'>Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
            <Link to='quiz' type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-3">Self Assesment Test</Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}
