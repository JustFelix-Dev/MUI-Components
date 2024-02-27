import { CircularProgress, Stack,LinearProgress } from "@mui/material"

const MuiProgress = () => {
  return (
     <Stack spacing={2}>
      <CircularProgress/>
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" value={75} />

      <LinearProgress/>
      <LinearProgress color="success" />
      <LinearProgress color="success" variant="determinate" value={75} />

     </Stack>
  )
}

export default MuiProgress
