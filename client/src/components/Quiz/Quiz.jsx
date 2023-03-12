import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuestion, postQuestion } from '../../http';
import { setQuizResponseSlice } from '../../store/QuizResponseSlice';
import { Question } from '../HomePage/Questions';
import { QuizCard } from '../HomePage/QuizCard';
export const Quiz = () => {
    const tmpquestion = [
        {
            "QUESTION": 'thigue is que1',
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
    const [ansSet, setAnsSet] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])
    useEffect(() => {
        getQuestion().then((res)=>{
            setQuestionSet(res.data);
        })
    }, [])

    const dispatch = useDispatch();

    const formSubmit = ()=>{
        const json = {
            answer: ansSet
        }
        postQuestion(json).then((res)=>{
            console.log(res);
            dispatch(setQuizResponseSlice(res.data));
        }
        )
    }


    
    return(
        <>
        <br />
        <div className='flex items-center justify-center'>
            <br /><br />
        <div className='border-2 max-w-fit bg-white rounded-xl pr-20'>
            <br />
          <div>
            <h1 className='text-2xl font-bold ml-10' >Self Assesment Test</h1>
          </div>  
          <div className='ml-10 text-white '>
            
            <ol className="relative border-l  dark:border-gray-700 max-w-fit">                  
                {questionSet && questionSet.length > 0 && 
                questionSet.map((que,i)=>{
                     return <li className="mb-10 ml-4 " > 
                     <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 text-white">

                     </div>
                     <QuizCard que={que} key={i} ansSet={ansSet} index={i} setAnsSet={setAnsSet}/>
                 </li>

                }) 
                 }
            </ol>

          </div>
          <Link to='results' href='http://localhost:3000/results' onClick={formSubmit} type="button"  className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-24">Submit</Link>
        </div>
        </div>
        </>
    );
}
