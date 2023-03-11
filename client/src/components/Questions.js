import React, { useEffect, useState } from 'react'
import { QuizCard } from './QuizCard';

export const Question = (props) => {
    const tmpquestion = [
        {
            "QUESTION": 'this is que1',
            'OPTION': ["opt1", "opt2"]
        },
        {
            "QUESTION": 'this is que1',
            'OPTION': ["opt1", "opt2"]
        },
        {
            "QUESTION": 'this is que1',
            'OPTION': ["opt1", "opt2" ,"opt"]
        },
    ]
    const [questionSet, setQuestionSet] = useState(tmpquestion);
  
    return (
      <>
      <div className=' ' style={{border: '10px solid white shadow-md'}}>
          <div className='px-6 mt-5 mx-6'>

            {
                questionSet.map((que)=>{
                    return <QuizCard que={que}/>
                })
            }
          

            
          </div>
          <div className=''>
             
          </div>
      </div>
      </>
      
    )
  }