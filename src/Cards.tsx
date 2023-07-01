import React, {FC} from 'react';
import {AppBar,Box, CssBaseline, Divider, Drawer, IconButton,List, ListItem, ListItemButton, ListItemText, Toolbar, Card, CardContent, CardActions, Button, Typography, Grid, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import{useTheme} from '@mui/material/styles'
import {CustomCardContent, CustomCard, Container} from './ComponentRepository'
import GridCard from './GridCard';
import GridCardForm from './GridCardForm'

const drawerWidth = 240;
const navItems = ['Home', 'Form','Table', 'Grid'];



interface Props {
  window ? : () =>  Window;
  URL : string
}

const Cards:FC<Props> = (props) => {
  const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
          <ListItem sx={{ textAlign: 'center' }}>
            <Button sx={{ textAlign: 'center' }} size='small'  href='/'>home</Button>
          </ListItem>
          <ListItem>
            <Button sx={{ textAlign: 'center' }} size='small'  href='/user-form'>form</Button>
          </ListItem>

          <ListItem>
            <Button size='small'  href='/user-table'>table</Button>
          </ListItem>
          <ListItem>
            <Button size='small'  href='/grid-card-form'>Grid</Button>
          </ListItem>
          </List>

{/*           <List> */}
{/*             {navItems.map((item) => ( */}
{/*               <ListItem key={item} disablePadding> */}
{/*                 <ListItemButton sx={{ textAlign: 'center' }}> */}
{/*                   <ListItemText primary={item} /> */}
{/*                 </ListItemButton> */}
{/*               </ListItem> */}
{/*           ))} */}
{/*           </List> */}
        </Box>
      );

      const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Container>

      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
            <AppBar component="nav">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                   <Button sx={{ color: '#fff' }}  href='/' >Home</Button>
                   <Button sx={{ color: '#fff' }}  href='/user-form' >Form</Button>
                   <Button sx={{ color: '#fff' }}  href='/user-table' >Table</Button>
                   <Button sx={{ color: '#fff' }}  href='/grid-card-form' >Grid</Button>

{/*                             {navItems.map((item) => ( */}
{/*                   <Button key={item} sx={{ color: '#fff' }}> */}
{/*                                 {item} */}
{/*                   </Button>
                ))}*/}
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
              >
               {drawer}
              </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <Grid container justifyContent='flex-start' spacing='2em'>
              <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>

              <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
              fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
              aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
              cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
              at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
              Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et.
              </Typography>

              </Grid>

              <Grid item sx= {{flexGrow: 1 , flexBasis: '25%'}}>

                <img src ="/fireworks1.jpg" alt = 'img'/>

              </Grid>
              </Grid>
            </Box>
      </Box>




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



    </Container>
  )

}

export default Cards