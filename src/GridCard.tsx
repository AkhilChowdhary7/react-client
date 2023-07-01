import React, {FC} from 'react';
import {Button, Grid, Typography, useMediaQuery} from '@mui/material';
import{useTheme} from '@mui/material/styles'
import {CustomCardContent, CustomCard} from './ComponentRepository'
import GridCardForm from './GridCardForm'

interface GridCardProps {
  title : string,
  content : string,
  number : number
}
// export const CustomCardContent = styled(CardContent)({
interface UserProps{
  URL : string
}
// const UserForm: FC<UserProps> = (props) => {

const GridCard : FC<GridCardProps> = (props) => {
// const GridCard =  ({title , content, number }: { title: string; content: string; number: number }) => {


const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return(
  <div>
    <CustomCard>
    <CustomCardContent>
    <Typography sx={{ fontSize : isMdScreen ? 20 : 10}}  color="red" gutterBottom>
                        {props.title}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color = {isMdScreen ? 'red' : 'orange'} gutterBottom>
                        {props.content}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Number : {props.number}
    </Typography>

    <div style={{marginBottom:'10em'}}/>


    </CustomCardContent>
  </CustomCard>
  </div>
  )}

export default GridCard;


