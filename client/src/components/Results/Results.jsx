import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export const Results = () => {
    var user_detail = useSelector((state)=> state.QuizResponseSlice);
    useEffect(() => {
        console.log(user_detail.androidInterestPercentage);
    }, [])
    
  return (
    <>
    <div>
    <div className=' flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-blue-500 mx-10 my-3'>Result</h3>
        <p className='text-xl text-blue-500 mx-16 my-3'>Interest in Android: {user_detail.androidInterestPercentage}%</p>
        <p className='text-xl text-blue-500 mx-16 my-3'>Interest in Web: {user_detail.webInterestPercentage}%</p>

    </div>
    <div className='flex flex-col'>
    <Link to='android' type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/6 mx-16 my-5">Learn More About Android</Link>
    <Link to='webdev' type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/6 mx-16 my-5">Learn More About Web</Link>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
    </div>
    </>
  )
}
