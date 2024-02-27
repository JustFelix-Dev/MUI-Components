import { Box,Tab} from "@mui/material"
import { TabContext, TabList,TabPanel } from "@mui/lab"
import { useState } from "react"
import { Favorite } from "@mui/icons-material";

const MuiTab = () => {
    const [ value,setValue] = useState('1');

    const handleChange=(event: React.SyntheticEvent, newValue:string)=>{
       setValue(newValue)
    }
  return (
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider',width:'300px'}} >
            <TabList aria-label="Tabs example" onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="scrollable" scrollButtons='auto'>
                <Tab label='Tab One' value='1' icon={<Favorite/>} iconPosition="start" />
                <Tab label='Tab Two' value='2' disabled />
                <Tab label='Tab Three' value='3'/>
            </TabList>
        <TabPanel value="1" >Panel One</TabPanel>
        <TabPanel value="2" >Panel Two</TabPanel>
        <TabPanel value="3" >Panel Three</TabPanel>
        </Box>
      </TabContext>
  )
}

export default MuiTab;
