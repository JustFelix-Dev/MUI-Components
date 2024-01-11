import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Rating} from '@mui/material'
import React, { useState } from 'react'

export const MuiRating = () => {
    const [ value, setValue ] = useState<number | null>(3)
    console.log({ value })
    const handleChange = (e:React.ChangeEvent<{}>,newValue:number | null)=>{
        setValue(newValue)
    }
  return (
     <Box>
        <h2>Ratings:</h2>
        <Rating value={value} 
        onChange={handleChange}
        precision={0.5}
        size='large'
        color='success'
        icon={<Favorite fontSize='inherit' color='error'/>}
        emptyIcon={<FavoriteBorder fontSize='inherit'/>}
        highlightSelectedOnly
         />
     </Box>
  )
}

