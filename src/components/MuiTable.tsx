import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { tableData } from '../utils/tableData'
const MuiTable = () => {
    console.log({tableData})
  return (
    <TableContainer component={Paper} sx={{maxHeight:'500px',width:'80%', margin:'0 auto'}} >
        <Table stickyHeader>
         <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
         {tableData.map(row => (
    <TableRow key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.first_name}</TableCell>
      <TableCell>{row.last_name}</TableCell>
      <TableCell>{row.email}</TableCell>
    </TableRow>
        ))}
         </TableBody>
        </Table>

    </TableContainer>
  )
}

export default MuiTable
