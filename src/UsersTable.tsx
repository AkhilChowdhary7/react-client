import React,{FC,useState} from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from'@mui/material'

interface User {
  firstName: string
  lastName: string
  email: string
  age: number
}

const UsersTable : FC = () => {
  const [userData, setUserData] = useState<User[]>([])

  return(
  <>
    <TableContainer style={{margin: 20}}>
      <Table>
         <TableHead>
           <TableRow>
             <TableCell>First Name</TableCell>
             <TableCell>Last Name</TableCell>
             <TableCell>Email</TableCell>
             <TableCell>Age</TableCell>
           </TableRow>
         </TableHead>
      </Table>
    </TableContainer>
  </>)
}

export default UsersTable