import React, {FC, useState, FormEvent, ChangeEvent} from 'react'
import {TextField, Grid, Button, Typography, FormControl, InputLabel, MenuItem,Select, SelectChangeEvent} from '@mui/material';
import axios from 'axios'
import DialogComponent from './Dialog'
import {DialogContext} from './DialogContext'

interface FormData {
  firstName: string
  lastName: string
  email: string
  age: number | string
  state: string
  state1:{
    prop1: string
    prop2: string
    prop3: string
  }


}


//another property of form data interface....ten states type string,implement validations for them

const initialValues: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  state: '',
  state1: {
    prop1: '',
    prop2: '',
    prop3: ''
  }
}

const UserForm: FC = () => {

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
    if(!formData.state.trim()){
      formErrors.state = 'state cannot be 0'
    }else if(formData.state.length > 12)
      formErrors.state = 'state cannot be more than 12 numbers'
//     if(!formData.state1?.prop1.trim()){
//       formErrors.state1.prop1 = 'state1 is required'
//     }else if(formData.state1.prop1.length > 50){
//       formErrors.state1.prop1 = 'state1 cannot be more than 50'



    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const payload = {
        'first-name': formData.firstName,
        'last-name': formData.lastName,
        'age': formData.age,
        'email': formData.email,
        'state': formData.state
    }

    console.log(JSON.stringify(payload, null, 2))


    console.log(formData)

    axios.post('http://localhost:8080/users',JSON.stringify(payload), {
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
        onChange={handleOnChange} error={!!errors.lastName} helperText={errors.lastName}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='Email' name='email' value={formData.email}
        onChange={handleOnChange} error={!!errors.email} helperText={errors.email}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='Age' name='age' value={formData.age} type='number'
        onChange={handleOnChange} error={!!errors.age} helperText={errors.age}
        fullWidth margin='normal' inputProps={{maxLength: 3}} size='small'/>

        <TextField label='Aadhaar' name='Aadhaar' value={formData.state}
        onChange={handleOnChange} error={!!errors.state} helperText={errors.state}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>

        <TextField label='prop1' name='prop1' value={formData.state1.prop1 ?? ''}
        onChange={handleOnChange} error={!!errors.state1?.prop1} helperText={errors.state1?.prop1}
        fullWidth margin='normal' inputProps={{maxLength: 50}} size='small'/>


         <label>Selected State: {selectedState}

         <select style={{margin:20}} id="state" value={selectedState} onChange={handleSelectChange}>
           <option value=" ">Select a state</option>
             {stateList.map((state) => (
               <option key={state} value={state}>
                 {state}
             </option>
          ))}
         </select></label>

        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
            <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.state}
                  label="state"
                  onChange={handleChange} >
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