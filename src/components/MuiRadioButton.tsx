import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, {  useState } from 'react'

export const MuiRadioButton = () => {
    const [ value, setValue ] = useState('')
    console.log(value)

    const handleChange=( e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
  return (
    <Box>
      <h2>Radio Buttons:</h2>
      <FormControl error>
        <FormLabel id='job-experience-label-group'>Years of Experience</FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience-label-group'
        value={value}
        onChange={handleChange} row>
            <FormControlLabel control={<Radio color='secondary'/>} label={'0-2'} value={'0-2'}/>
            <FormControlLabel control={<Radio/>} label={'3-5'} value={'3-5'}/>
            <FormControlLabel control={<Radio color='error' size={'small'}/>} label={'6-10'} value={'6-10'}/>
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

