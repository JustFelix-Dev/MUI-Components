import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null)

  console.log(formats)
  const handleChangeFormat=(e:React.MouseEvent<HTMLElement>,newValue: string | null)=>{
    setFormats(newValue)
  }
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
      <Button variant='contained' color='error' disableRipple>Error Button</Button>
      <Button variant='contained' color='warning' disableElevation>Warning Button</Button>
      <Button variant='contained' color='info'>Info Button</Button>
      <Button variant='contained' color='success'>Success Button</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
     <Button variant='contained' size='small'>Small</Button>
     <Button variant='contained' size='medium'>Medium</Button>
     <Button variant='contained' size='large'>Large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
     <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
     <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
     <IconButton color='success'  size='small' onClick={()=> alert('Working!')} >
      <SendIcon/>
     </IconButton>
    </Stack>
    <Stack direction='row'>
      <ButtonGroup variant='contained' size='medium' color='error' orientation='vertical'>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Stack>
    <Stack>
      <ToggleButtonGroup aria-label='text formatting' color='primary' value={formats} onChange={handleChangeFormat} exclusive orientation='vertical' >
        <ToggleButton aria-label='bold' value='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton aria-label='italic' value='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton aria-label='underline'  value='underlined'><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
     </Stack>
    </>
  )
}

export default MuiButton
