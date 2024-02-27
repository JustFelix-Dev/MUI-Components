import { Skeleton, Stack,Box,Avatar,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const MuiSkeleton = () => {
    const [ loading,setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },3000)
    },[])
  return (
    // <Stack spacing={1} width='250px'>
    //     <h3>Skeletons:</h3>
    //     <Skeleton/>
    //     <Skeleton variant='circular' width={50} height={50} animation={false} />
    //     <Skeleton variant='rectangular' width={250} height={150} animation='wave' />
    // </Stack>
    <Box sx={{width:'250px'}} >
        { loading ? (
            <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
        ):(
            <img src='https://source.unsplash.com/random/256x144' alt='skeleton' width={256} height={144} />
        )}
        <Stack direction='row' spacing={1} sx={{ width:'100%',marginTop:'12px'}} >
             {
                loading ? (
                    <Skeleton variant='circular' width={40} height={40} />
                ):(<Avatar>FB</Avatar>)
             }
        </Stack>
        <Stack sx={{ width:'80%'}}>
            {
                loading ? (
                    <>
                    <Typography variant='body1'>
                        <Skeleton variant='text' width='100%' animation='wave'/>
                    </Typography>
                    <Typography variant='body2'>
                        <Skeleton variant='text' width='100%' animation='wave'/>
                    </Typography>
                    </>
                ) : (
                    <Typography>REACT MUI Skeleton</Typography>
                )
            }
        </Stack>

    </Box>
  )
}

export default MuiSkeleton
