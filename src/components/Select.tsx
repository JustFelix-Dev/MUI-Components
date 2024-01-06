import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

export const Select = () => {
    const [ country,setCountry] = useState<string[]>([])
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setCountry(typeof value === 'string' ? value.split(','):value)
    }
    console.log({ country })
  return (
   <Box width={'200px'}>
   <TextField label='Select Country' select value={country} onChange={handleChange} SelectProps={{ multiple:true }} fullWidth>
    <MenuItem value='IN'>India</MenuItem>
    <MenuItem value='US'>USA</MenuItem>
    <MenuItem value='NG'>Nigeria</MenuItem>
   </TextField>
   </Box>
  )
}

