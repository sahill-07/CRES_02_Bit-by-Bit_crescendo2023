import React, { useEffect, useState } from 'react'
import { getQuestion } from '../../http';
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
             'OPTION': ["opt1", "opt2" ,"opt3"]
         },
     ]
    const [questionSet, setQuestionSet] = useState(tmpquestion);
    useEffect(() => {
        getQuestion().then((res)=>{
            console.log(res);
            setQuestionSet(res.data);

        })
    }, [])
    
  
    return (
      <>
      <div className='max-w-fit min-w-[40vw]' >
          <div className=''>

            {
                questionSet && questionSet.length > 0 && questionSet.map((que)=>{
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