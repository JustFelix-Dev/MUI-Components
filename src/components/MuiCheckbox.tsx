import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const MuiCheckbox = () => {
    const [ isaccepted,setIsAccepted ] = useState(false)
    const [ skills, setSkills ] = useState<string[]>([])
    console.log({ isaccepted })
    console.log( {skills} )
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setIsAccepted(e.target.checked)
    }
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
       <h2>Checkbox:</h2>
       <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox color='error' size='small' checked={isaccepted} onChange={handleChange} />}/>
        </Box>
        <Box>
        <Checkbox
        icon={<BookmarkBorderIcon/>}
        checkedIcon={<BookmarkIcon/>}
        checked={isaccepted}
        onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel label='HTML' control={<Checkbox checked={skills.includes('html')} value={'html'} onChange={handleSkillChange} />}/>
                <FormControlLabel label='CSS' value={'css'} control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}/>
                <FormControlLabel label='Javascript' value={'javascript'} control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}/>
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
       </Box>
      </>
  )
}

