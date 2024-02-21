import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react"

const MuiDrawer = () => {
    const [ isDrawerOpen,setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton color="inherit" edge="start" size="large" aria-label="logo" onClick={()=> setIsDrawerOpen(true)} >
        <Menu/>
      </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant="h6" component='div'>
           Side Panel 1
        </Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer
