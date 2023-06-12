import React, {FC, useState, FormEvent, ChangeEvent} from 'react'
import {TextField, Grid, Button, Typography} from '@mui/material';


interface FormData {
  firstName: string
  lastName: string
  email: string
  age: number | string
}

const initialValues: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0
}

const UserForm: FC = () => {

  const [formData, setFormData] = useState<FormData>(initialValues)
  const formErrors: Partial<FormData> = {}
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

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

  const stateList = [
    'First Name',
    'Last Name',
    'Email',
    'Age',
    // Add more states as needed
  ];


   const [selectedState, setSelectedState] = useState('');

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
     setSelectedState(event.target.value);
   };

  return (
    <div style={{margin: '2em'}}>
      <form onSubmit={handleOnSubmit} style={{maxWidth: '50em'}}>
        <Typography variant='h5' style={{letterSpacing: '0.1em'}}>USER FORM</Typography>
        <TextField label='First Name' name='firstName' value={formData.firstName}
        onChange={handleOnChange} error={!!errors.firstName} helperText={errors.firstName || 'Enter your first name'}
        fullWidth margin='normal' inputProps={{maxlength: 50}} size='small'/>

        <TextField label='Last Name' name='lastName' value={formData.lastName}
        onChange={handleOnChange} error={!!errors.lastName} helperText={errors.lastName}
        fullWidth margin='normal' inputProps={{maxlength: 50}} size='small'/>

        <TextField label='Email' name='email' value={formData.email}
        onChange={handleOnChange} error={!!errors.email} helperText={errors.email}
        fullWidth margin='normal' inputProps={{maxlength: 50}} size='small'/>

        <TextField label='Age' name='age' value={formData.age} type='number'
        onChange={handleOnChange} error={!!errors.age} helperText={errors.age}
        fullWidth margin='normal' inputProps={{maxlength: 3}} size='small'/>

        <select style={{margin:20}} id="state" value={selectedState} onChange={handleSelectChange}>
          <option value=" ">Select a state</option>
            {stateList.map((state) => (
              <option key={state} value={state}>
                {state}
            </option>
          ))}
        </select>

        <p>Selected State: {selectedState}</p>


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