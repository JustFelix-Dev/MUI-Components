import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiNavbar = () => {
    const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const handleClick=( event:React.MouseEvent<HTMLButtonElement>)=>{
       setAnchorEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
  return (
    <>
       <h2>Navbar:</h2>
      <AppBar position='static'>
         <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ flexGrow: 1 }}>
                <CatchingPokemon/>
         <Typography variant='h6' component='div' >
            POKEMONAPP
         </Typography>
            </IconButton>
         <Stack direction='row' spacing={2}>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>Pricing</Button>
            <Button color='inherit' id='resources-button' onClick={handleClick} endIcon={<KeyboardArrowDown/>}>Resources</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
         </Stack>
         <Menu id='resources-menu' anchorEl={anchorEl} open={open}     aria-controls={ open ? 'resources-menu' : undefined}
         aria-haspopup='true' aria-expanded={open ? 'true': undefined}
          MenuListProps={{'aria-labelledby':'resources-button'}} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'right'}} transformOrigin={{vertical:'top',horizontal:'right'}} >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
         </Menu>
         </Toolbar>
      </AppBar>
    </>
  )
}

export default MuiNavbar
