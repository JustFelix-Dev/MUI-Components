import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
      <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='random-image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'} >React</Typography>
                <Typography variant='body2' color={'text.secondary'}>
                    React is a  Javascript library used for building user interfaces. React can be used as a base in the development of single-page applications.
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Learn more</Button>
            </CardActions>
        </Card>
      </Box>
  )
}

export default MuiCard
