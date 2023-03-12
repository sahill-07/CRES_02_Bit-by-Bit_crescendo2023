import React, { useEffect, useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export const QuizCard = (props) => {
  // componenDid
  useEffect(()=>{
    console.log([props.que.OPTION[0]]);
  }, []);

  const [valueSelected, setValueSelected] = useState(null);

  const handleChange = (e)=>{
    setValueSelected(e.target.value);
    let newAnsset = props.ansSet;
    newAnsset[props.index] = e.target.value;
    props.setAnsSet([...newAnsset]);
    console.log(newAnsset);
  }

  return (
    <>
    <div className=' px-3 py-3 rounded-xl  shadow-md hover:shadow-lg max-w-5xl ' >
       <div className='text-black'>
       <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{props.que.QUESTION}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {
              props.que.OPTION && props.que.OPTION.length > 0 &&
              props.que.OPTION.map((opt, i)=>{
                return <FormControlLabel value={props.que.OPTION[i]} control={<Radio/>} label= {props.que.OPTION[i]} />

              })
            }
            {/* <FormControlLabel value={props.que.OPTION[1]} control={<Radio />} label= {props.que.OPTION[1]} />
            <FormControlLabel value={props.que.OPTION[2]} control={<Radio />} label= {props.que.OPTION[2]} />
            <FormControlLabel value={props.que.OPTION[3]} control={<Radio />} label = {props.que.OPTION[3]} /> */}
            </RadioGroup>
        </FormControl>
       </div>
    </div>

    </>
    
  )
}
