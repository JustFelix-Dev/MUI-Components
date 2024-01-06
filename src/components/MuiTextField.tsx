import {  InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const MuiTextField = () => {
  return (
    <>
     <h2>TextField:</h2>
   <Stack spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack  direction={'row'} spacing={2}>
        <TextField label='secondary' color='secondary' />
        <TextField label='error' color='error' />
        <TextField label='warning' color='warning' size='small' />
        <TextField label='secondary' color='secondary' />
      </Stack>
      <Stack direction={'row'} spacing={2}>
         <TextField label='Form Input' required/>
         <TextField label='Form Input' type='password' helperText='Do not share your passwords!' disabled/>
         <TextField label='Read-Only'placeholder='You can only read me!' InputProps={{ readOnly:true }}/>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Amount'
         InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment>,}} />
        <TextField label='Weight'
         InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment>,}} />
         <TextField label='Password' placeholder='Your Password Please!' InputProps={{ endAdornment:<InputAdornment position='end'><VisibilityOffIcon/></InputAdornment>}}/>
      </Stack>
   </Stack>
   </>
  )
}

