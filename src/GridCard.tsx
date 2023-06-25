import React, {FC} from 'react';
import {Button, Typography, useMediaQuery} from '@mui/material';
import{useTheme} from '@mui/material/styles'
import {CustomCardContent, CustomCard} from './ComponentRepository'
import GridCardForm from './GridCardForm'


// export const CustomCardContent = styled(CardContent)({
interface UserProps{
  URL : string
}

const GridCard =  ({title , content, number }: { title: string; content: string; number: number }) => {


const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return(
  <div>
  <CustomCard>
  <CustomCardContent>
    <Typography sx={{ fontSize: 14 }}  color="red" gutterBottom>
                        {title}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {content}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Number : {number}
    </Typography>
    <div style={{marginBottom:'5em'}}/>
{/*      <GridCardForm URL = "props.URL" /> */}

  </CustomCardContent>
  </CustomCard>
  </div>
  )}

export default GridCard;


