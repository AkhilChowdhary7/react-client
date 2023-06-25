import React, {FC} from 'react';
import { Grid,useMediaQuery } from '@mui/material';
import GridCard from './GridCard';
import{useTheme} from '@mui/material/styles'

interface UserProps{
  URL : string
}

const GridCardForm:FC<UserProps> = (props) => {


const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.between('sm' , 'md'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'))


  return (

     <Grid container spacing={2} style={{ backgroundColor: 'grey',marginLeft : '1em'}} fontSize={isMdScreen ? 8 : 14}>
       <Grid item sx = {{flexGrow: 1 }}>
         <h2>1st row</h2>
       </Grid>
       <Grid item sx = {{flexGrow: 1 }} fontSize={isSmScreen ? 24 : 14}>
         <GridCard title="" content="First row, first card" number={1}  />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="" content="First row, second card" number={2} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="" content="First row, third card" number={3} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="" content="First row, fourth card" number={4} />
       </Grid>

     <Grid container spacing={2} style={{ backgroundColor: '#f3f3f3', marginLeft : '0em' }}>
       <Grid item sx = {{flexGrow: 1 }}>
         <h2>2nd row</h2>
       </Grid>
       {isExtraSmall ? (
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Extra small device" number={1} />
       </Grid> ): null}
       {isSmScreen ? (
       <>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Extra small device" number={1} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Smartphone" number={2} />
       </Grid>
       </>
       ): null}

       {isMdScreen ? (
       <>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Extra small device" number={1} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Smartphone" number={2} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Tablet" number={3} />
       </Grid>
       </>
       ): null}
       {isLgScreen ? (
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="2nd row" content="Desktop" number={4} />
       </Grid>
       ): null}
     </Grid>

     <Grid container spacing={2} style={{ backgroundColor: '#f3f3f3', marginLeft : '0em' }}>
       <Grid item sx = {{flexGrow: 1 }}>
         <h2>3rd row</h2>
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="3rd row" content="Third row first card" number={1} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="3rd row" content="Third row second card" number={2} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="3rd row" content="Third row third card" number={3} />
       </Grid>
     </Grid>



     </Grid>

  )}


export default GridCardForm;