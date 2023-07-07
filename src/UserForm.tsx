import React, {FC, useState, FormEvent, ChangeEvent} from 'react'
import {AppBar,Box, CssBaseline, Divider, Drawer, IconButton,List, ListItem, ListItemButton, ListItemText, Toolbar,TextField, Grid, Button, Typography, FormControl, InputLabel, MenuItem,Select, SelectChangeEvent} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import axios from 'axios'
import DialogComponent from './Dialog'
import {DialogContext} from './DialogContext'
import DrawerAppBar from './DrawerAppBar'


interface FormData {
  firstName: string
  lastName: string
  email: string
  age: number | string
  state: string
}


interface Props {
  URL : string
}

//another property of form data interface....ten states type string,implement validations for them

const initialValues: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  state: '',
}



const UserForm: FC<Props> = (props) => {

  const [formData, setFormData] = useState<FormData>(initialValues)
  const formErrors: Partial<FormData> = {}
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [show, setShow] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [state, setState] = useState<string>('');


  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    if(!formData.firstName.trim()){
      formErrors.firstName = 'First name is required'
    }else if(formData.firstName.length < 2){
       formErrors.firstName = 'First name cannot be less than 2 characters'
    }
    if(!formData.lastName.trim()){
       formErrors.lastName = 'Last name is required'
    }else if(formData.lastName.length < 2){
       formErrors.lastName = 'Last name cannot be less than 2 characters'
    }
    if(!formData.email.trim()){
      formErrors.email = 'email is required'
    }else if(!emailRegex.test(formData.email.trim())){
      formErrors.email = 'email should be provided in correct format'
    }
    if(formData.age <= 0){
      formErrors.age = 'age cannot be 0'
    }else if(formData.age > 150){
      formErrors.age = ' age cannot be more than 150'
    }


    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const payload = {
        'first-name': formData.firstName,
        'last-name': formData.lastName,
        'age': formData.age,
        'email': formData.email,
//         'state': formData.state
    }

    console.log(JSON.stringify(payload, null, 2))


    console.log(formData)

    axios.post(props.URL,JSON.stringify(payload), {
    headers:{
      'Content-Type': 'application/json'
      }
    }).then(response => {
        console.log(response.data)
        if(response.status === 201){
          setSuccess(true)
          setShow(true)
        }else{
          handleOnError()
        }
        }).catch(error => {
            console.error(error)
            handleOnError()
        })
//     axios.get('http://localhost:8080/spring-boot')
//       .then(response =>{
//         console.log(response)
//         if(response.status === 200){
//           setSuccess(true)
//           setShow(true)
//         }else{
//           handleOnError()
//         }
//
//         }).catch(error => {
//           console.log(error)
//           })

}

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value
    }))
    setErrors((prevErrors: Partial<FormData>) => ({
      ...prevErrors,
      [name]: ''
    }))
  }

  const handleSelectOnChange = (event: SelectChangeEvent) =>{
      const {name, value} = event.target
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: value
      }))
      setErrors((prevErrors: Partial<FormData>) => ({
        ...prevErrors,
        [name]: ''
      }))
  }

  const clearForm = () => {
  setFormData(initialValues)
  setErrors({})
  }

  const handleOnError = () => {
  setShow(true)
  setSuccess(false)
  }

  const handleChange = (event: SelectChangeEvent) => {
      setState(event.target.value as string);
    };

  const value = {show, setShow, success, setSuccess}

  const stateList = [
    'First Name',
    'Last Name',
    'Email',
    'Age',
    'Aadhaar'
  ];




   const [selectedState, setSelectedState] = useState('');

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
     setSelectedState(event.target.value);
   };

//   console.log(formData.state)


  return (
  <div style={{margin: '2em'}}>

      <form onSubmit={handleOnSubmit} style={{maxWidth: '50em'}}>
        <Typography variant='h5' style={{letterSpacing: '0.1em'}}>USER FORM</Typography>

        {show && <DialogContext.Provider value = {value}>
          <DialogComponent/>
        </DialogContext.Provider>
        }


        <TextField label='First Name' name='firstName' value={formData.firstName}
        onChange={handleOnChange} error={!!errors.firstName} helperText={errors.firstName || 'Enter your first name'}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='Last Name' name='lastName' value={formData.lastName}
        onChange={handleOnChange} error={!!errors.lastName} helperText={errors.lastName || 'Enter your last name'}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='Email' name='email' value={formData.email}
        onChange={handleOnChange} error={!!errors.email} helperText={errors.email}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='Age' name='age' value={formData.age} type='number'
        onChange={handleOnChange} error={!!errors.age} helperText={errors.age}
        fullWidth margin='normal' inputProps={{maxLength: 3}} size='small'/>



        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
            <Select sx = {{marginBottom:'1em'}}
                  name = "state"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.state}
                  label="state"
                  onChange={handleSelectOnChange} >
                  <MenuItem value=" "> </MenuItem>
                    {stateList.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
            </Select>
        </FormControl>





        <Grid container direction='row' spacing={4}>
          <Grid item>
            <Button size='small' variant='contained' type='submit' style ={{minWidth: '10em'}}>Submit</Button>
          </Grid>
          <Grid item>
            <Button size='small' variant='outlined' onClick={clearForm} style ={{minWidth: '10em'}}>Clear</Button>

          </Grid>
          <Grid item>
            <Button size="small" variant='outlined' href='/'>Go to Cards</Button>
          </Grid>
        </Grid>


      </form>
    </div>
  )
}
export default UserForm