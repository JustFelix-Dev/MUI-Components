import { Button, Stack } from '@mui/material'
import React from 'react'

const MuiButton = () => {
  return (
    <>
     <h2>Buttons:</h2>
     <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
      <Button variant='text' href='https://google.com'>Text Button</Button>
      <Button variant='contained'>Contained Button</Button>
      <Button variant='outlined'>Outlined Button</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
      <Button variant='contained' color='primary'>Primary Button</Button>
      <Button variant='contained' color='secondary'>Secondary Button</Button>
      <Button variant='contained' color='error'>Error Button</Button>
      <Button variant='contained' color='warning'>Warning Button</Button>
      <Button variant='contained' color='info'>Info Button</Button>
      <Button variant='contained' color='success'>Success Button</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
     <Button variant='contained' size='small'>Small</Button>
     <Button variant='contained' size='medium'>Medium</Button>
     <Button variant='contained' size='large'>Large</Button>
    </Stack>
     </Stack>
    </>
  )
}

export default MuiButton
