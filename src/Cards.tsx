import React, {FC} from 'react';
import {AppBar,Box, CssBaseline, Divider, Drawer, IconButton,List, ListItem, ListItemButton, ListItemText, Toolbar, Card, CardContent, CardActions, Button, Typography, Grid, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import{useTheme} from '@mui/material/styles'
import {CustomCardContent, CustomCard, Container} from './ComponentRepository'
import GridCard from './GridCard';
import GridCardForm from './GridCardForm'
import DrawerAppBar from './DrawerAppBar'



interface Props {
  URL : string
}

const Cards:FC<Props> = (props) => {
  const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))


  return (
  <>
    <Container>
      <Grid container justifyContent='flex-start' spacing='2em'>

         <CssBaseline />

            <Toolbar />
              <Grid item >
                <Grid container justifyContent='flex-start' spacing='2em' direction={isSmScreen ? 'column-reverse' : 'row'} >
                  <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>

                    <Typography>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                                  fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                                  aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                                  cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                                  at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                                  Minima ex dolor modi inventory sapiente necessitatibus aliquam fuga et.
                    </Typography>

                  </Grid>

                  <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>

                    <img src ="/fireworks1.jpg" alt = 'img'/>

                  </Grid>
                </Grid>
              </Grid>




      <Grid item  sx= {{flexGrow: 1 , flexBasis: '25%'}}>
      <Grid container justifyContent='flex-start' spacing={isMdScreen ? 2 : 4}
                                        direction={isSmScreen ? 'column' : 'row'}>
        <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>
           {/*<Card variant='outlined' style={{width: '15em'}}>
              <CardContent>*/}
           <CustomCard>
              <CustomCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Check User Form
                </Typography>
              </CustomCardContent>
              <CardActions>
                <Button size={isLgScreen ? 'medium' : 'small' } variant='outlined' href='/user-form'>Go to form</Button>
              </CardActions>
           </CustomCard>

        </Grid>
        <Grid item sx = {{flexGrow: 1 , flexBasis: '25%' }}>

            {/*<Card variant='outlined' style={{width: '15em'}}>
              <CardContent>*/}
            <CustomCard>
              <CustomCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary"  gutterBottom>
                  Check existing users
                </Typography>
              </CustomCardContent>
              <CardActions>
                <Button size="small" variant='outlined' href='/user-table '>Go to table</Button>
              </CardActions>
            </CustomCard>
        </Grid>
        <Grid item sx = {{flexGrow: 1  , flexBasis: '25%', height: '100%'}} >
          <CustomCard>
            <CustomCardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary"  gutterBottom>
                            Check the grid example
              </Typography>
            </CustomCardContent>
            <CardActions>
              <Button size="small" variant='outlined' href='/grid-card-form'>Go to Grid</Button>
            </CardActions>

          </CustomCard>
        </Grid>

      </Grid>
      </Grid>
      </Grid>



    </Container>
    </>
  )

}

export default Cards