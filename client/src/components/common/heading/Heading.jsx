import React from 'react'

export const Heading = ({subtitle, title}) => {
  return (
    <>
      <div id='heading'>
        <h3 className='text-2xl font-semibold'>{subtitle} </h3>
        <h1 className='mt-4 text-5xl font-bold'>Best Online Education <br/> Expertise </h1>
      </div>
    </>
  )
}
