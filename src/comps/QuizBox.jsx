import * as colors from '@mui/material/colors';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./utils.css"

function QuizBox({questionID, question,show , options , setAnswer}) {
    const [value, setValue] = React.useState("")
    const handleChange = (event) => {
        setValue(event.target.value)
        
    }
    React.useEffect(() => {
        setAnswer(questionID, value)
    // eslint-disable-next-line react-hooks /exhaustive-deps
    }, [value])
        
  return (
    <div className='  w-1/3  grid place-items-start  p-5 border-transparent rounded-lg' style={{display: show ? 'block' : 'none'}}>
    <FormControl sx={{
    '& .MuiSvgIcon-root': {
      fontSize: 28,
      color: colors.pink[800]
    },
  }}
  >
        <FormLabel id={questionID} sx={{fontSize: 28 , fontWeight:'bolder',color:'white'}}   >
            {questionID}.  {question}
        </FormLabel>
        <RadioGroup
            aria-label={questionID}
            name={questionID}
            value={value}
            onChange={handleChange}
            defaultValue={options?.[1]}
            >
            {options?.map((option, index) => {
                return (
                    <FormControlLabel
                        
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                        sx={{
                            color: colors.blue[100],
                            '&.Mui-checked': {
                              color: colors.blue[600],
                            },
                          }}
                    />
                )
            })}
            </RadioGroup>
    </FormControl>
    </div>
  )
}

export default QuizBox