import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Form','Table', 'Grid'];
const currentPage = window.location.pathname;

export default function DrawerAppBar(props: Props) {
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
                  <Button sx={{ textAlign: 'center', borderBottom: currentPage === '/' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }} size='small'  href='/'>home</Button>
                </ListItem>
                <ListItem>
                  <Button sx={{ textAlign: 'center', borderBottom: currentPage === '/user-form' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }} size='small'  href='/user-form'>form</Button>
                </ListItem>

                <ListItem>
                  <Button sx={{ textAlign: 'center', borderBottom: currentPage === '/user-table' ? '2px solid red' :'2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }} size='small'  href='/user-table'>table</Button>
                </ListItem>
                <ListItem>
                  <Button sx={{ textAlign: 'center', borderBottom: currentPage === '/grid-card-form' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }} size='small'  href='/grid-card-form'>Grid</Button>
                </ListItem>
                </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button sx={{ color: '#fff', borderBottom:currentPage === '/' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }}  href='/' >Home</Button>
            <Button sx={{ color: '#fff', borderBottom:currentPage === '/user-form' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }}  href='/user-form' >Form</Button>
            <Button sx={{ color: '#fff', borderBottom:currentPage === '/user-table' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }}  href='/user-table' >Table</Button>
            <Button sx={{ color: '#fff', borderBottom: currentPage === '/grid-card-form' ? '2px solid red' : '2px solid transparent', '&:hover, &:focus': { borderBottomColor: 'red' } }}  href='/grid-card-form' >Grid</Button>
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
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
      </Drawer>


      </Box>

    </Box>
  );
}