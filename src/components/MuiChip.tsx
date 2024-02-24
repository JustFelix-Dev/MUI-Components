import { Face } from "@mui/icons-material"
import { Avatar, Chip, Stack } from "@mui/material"

const MuiChip = () => {
  return (
     <Stack direction='row' spacing={1}>
       <Chip label='chip' color="primary" size="small" icon={<Face/>} />
       <Chip label='chip outlined' variant="outlined" color="secondary" size="small" avatar={<Avatar>F</Avatar>} />
        <Chip label='Click' color="success" onClick={()=> {alert('Clicked!')}} />
        <Chip label='Delete' color="warning" onClick={()=> {alert('Clicked!')}} onDelete={()=>{ alert("Deleted")}} />

     </Stack>
  )
}

export default MuiChip
