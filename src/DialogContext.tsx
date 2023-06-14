import {createContext} from 'react'

export interface FormPropsType{
  success: boolean
  setSuccess: (success: boolean) => void
  show: boolean
  setShow: (show: boolean) => void
}

export const DialogContext = createContext<FormPropsType>({} as FormPropsType)