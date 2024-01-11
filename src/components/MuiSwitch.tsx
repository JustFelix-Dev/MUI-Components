import { Box, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

export const MuiSwitch = () => {
    const [ checked, setChecked ] = useState(false);
    const [ skills, setSkills ] = useState<string[]>([])
    console.log({ checked })
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.target.checked)
    }
    console.log( {skills} )
  
    const handleSkillChange=( e:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(e.target.value);
        console.log({ index })
        if( index === -1){
            setSkills([...skills, e?.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !== e.target.value))
        }
    }

  return (
    <>
      <h2>Switch:</h2>
       <Box>
        <FormControlLabel label='Dark mode' control={<Switch checked={checked} size='small' color='success' onChange={handleChange} />} />
       </Box>
       <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel label='HTML' control={<Switch checked={skills.includes('html')} value={'html'} onChange={handleSkillChange} />}/>
                <FormControlLabel label='CSS' value={'css'} control={<Switch checked={skills.includes('css')} onChange={handleSkillChange} />}/>
                <FormControlLabel label='Javascript' value={'javascript'} control={<Switch checked={skills.includes('javascript')} onChange={handleSkillChange} />}/>
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
    </>
  )
}

