import {Dialog,DialogTitle, DialogContent, DialogActions, Button} from '@mui/material'
import React, {FC, useContext} from 'react'
import {DialogContext} from './DialogContext'

const DialogComponent: FC = () => {
  const {show, setShow, success, setSuccess} = useContext(DialogContext)

  const handleDialog = () => {
    setShow(false)
    setSuccess(false)
  }

  return(
  <>
    <Dialog open={show} onClose={handleDialog}>
      <DialogTitle>{success ? 'Success' : 'Error'}</DialogTitle>
      <DialogContent>
        {success ? 'your request has been submitted successfully' : 'an error occurred while processing'}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} variant='outlined' color='primary'>OK</Button>
        </DialogActions>

    </Dialog>
   </>
  )
}

export default DialogComponent