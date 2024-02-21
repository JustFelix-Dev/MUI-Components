import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color='secondary' underline='hover'>Secondary</Link>
      <Typography variant='h5'>
      <Link href="#" color='secondary' underline='hover'>Secondary</Link>
      </Typography>
    </Stack>
  )
}

export default MuiLink
