import React,{FC,useState, useEffect, MouseEvent, ChangeEvent} from 'react'
import axios from 'axios'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from'@mui/material'

interface User {
  firstName: string
  lastName: string
  email: string
  age: number
}

interface UserProps{
  URL :string
}

const UsersTable : FC<UserProps> = (props) => {
  const [userData, setUserData] = useState<User[]>([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
//   const[count,setCount] = useState<number>(0)

  useEffect(() => {
    getData()
  },[])

//    useEffect(() => {
//       getData()
//    }, [count])

   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const displayedData = userData.slice(page * rowsPerPage, page *rowsPerPage +rowsPerPage)

  const getData = async () => {
    try{
      const response = await axios.get(props.URL)
      const mappedData: User[] = response.data.map((item:any) => ({
        firstName: item['first-name'],
        lastName: item['last-name'],
        email: item.email,
        age: item.age
      }))
//       console.log(response.data)
      setUserData(mappedData)
    }catch(error){
      console.error(error)
    }
  }

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
         <TableBody>
           {displayedData.map((item) => (
             <TableRow key={item.email}>
               <TableCell>{item.firstName}</TableCell>
               <TableCell>{item.lastName}</TableCell>
               <TableCell>{item.email}</TableCell>
               <TableCell>{item.age}</TableCell>

             </TableRow>
           ))
           }
         </TableBody>
      </Table>
        <TablePagination
              rowsPerPageOptions={[5, 10, 15, {label: 'All', value: -1}]}
              component="div"
              count={userData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
    </TableContainer>
  </>)
}

export default UsersTable