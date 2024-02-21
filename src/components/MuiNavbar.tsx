import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const MuiNavbar = () => {
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
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
         </Stack>
         </Toolbar>
      </AppBar>
    </>
  )
}

export default MuiNavbar
