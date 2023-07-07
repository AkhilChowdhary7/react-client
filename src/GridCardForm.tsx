import React, {FC} from 'react';
import {Button, Grid,useMediaQuery } from '@mui/material';
import GridCard from './GridCard';
import{useTheme} from '@mui/material/styles'
import DrawerAppBar from './DrawerAppBar'



const GridCardForm:FC = () => {


const theme = useTheme()
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isSmScreen = useMediaQuery(theme.breakpoints.between('sm' , 'md'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return (
  <>
     <Grid container spacing={2} style={{ backgroundColor: isSmScreen || isExtraSmall ? 'grey' : 'blue'  ,marginLeft : '1em' }} >
       <Grid item sx = {{flexGrow: 1 }}>
         <h2>1st row</h2>
       </Grid>
       <Grid item sx = {{flexGrow: 1 , fontSize :isMdScreen ? '24px' : '14px'}} >
         <GridCard title="" content="First row, first card" number={1}  />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="hsgvd" content="First row, second card" number={2} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="" content="First row, third card" number={3} />
       </Grid>
       <Grid item sx = {{flexGrow: 1 }}>
         <GridCard title="" content="First row, fourth card" number={4} />
       </Grid>
     </Grid>


     <Grid container spacing={2} style={{ backgroundColor: '#f3f3f3', marginLeft: '0em' }}>
       <Grid item sx={{ flexGrow: 1 }}>
         <h2>2nd row</h2>
       </Grid>

       {(isLgScreen || isSmScreen || isMdScreen || isExtraSmall) && (
         <Grid item sx={{ flexGrow: 1 }}>
           <GridCard title="2nd row" content="Extra small device" number={1} />
         </Grid>
       )}

       {(isSmScreen || isMdScreen || isLgScreen) && (


           <Grid item sx={{ flexGrow: 1 }}>
             <GridCard title="2nd row" content="Smartphone" number={2} />
           </Grid>

       )}


       {(isMdScreen || isLgScreen) && (
         <Grid item sx={{ flexGrow: 1 }}>
           <GridCard title="2nd row" content="Tablet" number={3} />
         </Grid>
       )}

       {(isLgScreen) && (
         <Grid item sx={{ flexGrow: 1 }}>
           <GridCard title="2nd row" content="Desktop" number={4} />
         </Grid>
       )}
     </Grid>






     <>
     <Grid container direction={isMdScreen ? "row-reverse" : "row"} justifyContent="space-between" spacing={2} style={{ backgroundColor: 'lightGreen', marginLeft : '0em' }}>
            <Grid item>
              <h2>3rd row</h2>
            </Grid>

            <Grid item >

              <GridCard title="3rd row" content="Third row first card" number={1} />
            </Grid>

            <Grid item >
              <Grid container>
              <Grid item>
              <GridCard title="3rd row" content="Third row second card" number={2} />
              </Grid>
              <Grid item >
              <GridCard title="3rd row" content="Third row third card" number={3} />
              </Grid>
            </Grid>
          </Grid>
          </Grid>

     </>



     <Grid container sx={{ alignItems: 'center' }} >
       <Grid item  xs={12} sx={{ alignItems: 'center' }}>
         <Button size="small" variant='contained' href='/'>Go to Cards</Button>
       </Grid>
     </Grid>


  </>
  )}




export default GridCardForm;