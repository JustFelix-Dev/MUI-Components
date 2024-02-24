import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react'

const MuiAlert = () => {
  return (
     <Stack spacing={2}>
        <Alert severity='error' >
            <AlertTitle>Error</AlertTitle>
            This is an error alert</Alert>
        <Alert severity='warning' >
        <AlertTitle>Warning</AlertTitle>
            This is a warning alert</Alert>
        <Alert severity='info' >
        <AlertTitle>Info</AlertTitle>
            This is an info alert</Alert>
        <Alert severity='success' >This is a success alert</Alert>

        <Alert variant='outlined' severity='error' >This is an error alert</Alert>
        <Alert variant='outlined' severity='warning' >This is a warning alert</Alert>
        <Alert variant='outlined' severity='info' >This is an info alert</Alert>
        <Alert variant='outlined' severity='success' >This is a success alert</Alert>

        <Alert  variant='filled' severity='error' onClose={()=>{alert('Close Alert')}} >This is an error alert</Alert>
        <Alert variant='filled' severity='warning' >This is a warning alert</Alert>
        <Alert  variant='filled'severity='info' >This is an info alert</Alert>
        <Alert variant='filled' severity='success' icon={<Check/>} action={<Button color='inherit' size='small'>UNDO</Button>} ><AlertTitle>Success</AlertTitle>
           <p>This is a success alert</p></Alert>
     </Stack>
  )
}

export default MuiAlert
