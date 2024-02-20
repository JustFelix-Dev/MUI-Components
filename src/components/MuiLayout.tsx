import { Box, Stack,Divider,Grid,Paper } from '@mui/material';
import React from 'react';

const MuiLayout = () => {
  return (
    <Paper sx={{backgroundColor:'#e3e3e3',margin: '0 auto',width:'80%',padding:'1rem'}} elevation={4} >
    <Stack sx={{border: '1px solid '}} direction={'row'} divider={<Divider orientation='vertical' flexItem />} >
    <Box component={'header'} sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding:'16px',
        '&:hover': {
            backgroundColor : 'primary.light',
        }
    }}>MuiLayout</Box>
    <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>Hello World</Box>
    </Stack>
    <Grid container my={4} spacing={2} rowSpacing={1} columnSpacing={3}>
        <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 1</Box></Grid>
        <Grid item xs={6}><Box bgcolor='success.light' p={2}>Item 2</Box></Grid>
        <Grid item xs={3}><Box bgcolor='warning.light' p={2}>Item 3</Box></Grid>
        <Grid item xs={9}><Box bgcolor='info.light' p={2}> Item 4</Box></Grid>
    </Grid>
    </Paper>


  )
}

export default MuiLayout
