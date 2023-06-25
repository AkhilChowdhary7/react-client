import React, {FC} from 'react';
import {CardActions, Button, Typography, Grid, useMediaQuery} from '@mui/material';
import{useTheme} from '@mui/material/styles'
import {CustomCardContent, CustomCard} from './ComponentRepository'
import GridCard from './GridCard';
import GridCardForm from './GridCardForm'

const Cards:FC = () => {
  const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <div style={{margin: 20}}>

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
        <Grid item sx = {{flexGrow: 1 }}>

            {/*<Card variant='outlined' style={{width: '15em'}}>
              <CardContent>*/}
            <CustomCard>
              <CustomCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Check existing users
                </Typography>
              </CustomCardContent>
              <CardActions>
                <Button size="small" variant='outlined' href='/user-table '>Go to form</Button>
              </CardActions>
            </CustomCard>
        </Grid>
        <Grid item sx = {{flexGrow: 1 }} >
          <CustomCard>
          <CustomCardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Check the grid example
          </Typography>
          <CardActions>
            <Button size="small" variant='outlined' href='/grid-card-form'>Go to Grid</Button>
          </CardActions>
          </CustomCardContent>
          </CustomCard>
        </Grid>

      </Grid>



    </div>
  )

}

export default Cards