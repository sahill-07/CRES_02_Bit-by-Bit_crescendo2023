import React, { useEffect } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export const QuizCard = (props) => {
  // componenDid
  useEffect(()=>{
  }, []);

  return (
    <>
    <div className=' my-10 border-2 rounded-xl justify-center shadow-md hover:shadow-lg max-w-5xl mx-60 '>
       <div className='px-5 py-5'>
       <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{props.que.QUESTION}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="{props.que.OPTION[0]}" control={<Radio />} label= {props.que.OPTION[0]} />
            <FormControlLabel value="{props.que.OPTION[1]}" control={<Radio />} label= {props.que.OPTION[1]} />
            <FormControlLabel value="{props.que.OPTION[2]}" control={<Radio />} label= {props.que.OPTION[2]} />
            <FormControlLabel value="{props.que.OPTION[3]}" control={<Radio />} label = {props.que.OPTION[3]} />
            </RadioGroup>
        </FormControl>
       </div>
    </div>

    </>
    
  )
}
