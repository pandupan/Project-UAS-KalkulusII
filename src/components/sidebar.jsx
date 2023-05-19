import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import { Link } from 'react-router-dom';
import { History, Home } from '@mui/icons-material';
import RemoveRoadOutlinedIcon from '@mui/icons-material/RemoveRoadOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AddRoadIcon from '@mui/icons-material/AddRoad'; 
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='bg-[#EA8D29]'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{fontFamily:"Merriweather"}}>
              Haloo Teman Teman!!👋, Selamat datang di CalMath 🙂
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
          <List>
            {['Dashboard',].map((text, index) => {
              let route;
              switch (index) {
                case 0:
                  route = '/dashboard'
                  break;
                default:
                  break;
              }
              return(
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={route}>
                  <ListItemIcon>
                    {index === 0 ? <FolderCopyTwoToneIcon/> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              );
            })}
          </List>
          <List>
          <Divider />
            <h1 className='flex justify-center font-semibold bg-slate-100'>Matriks 2 x 2</h1>
          <Divider />
            {['Determinan', 'minor' ,'Kofaktor', 'Adjoin'].map((text, index) => {
              let route;
              let icon;
              switch (index) {
                case 0:
                  route = '/determinan2';
                  icon = <CalculateOutlinedIcon/>
                  break;
                  case 1:
                  route = '/minor2';
                  icon = <ExtensionOutlinedIcon/>
                  break; 
                case 2:
                  route = '/kofaktor2';
                  icon = <AddRoadIcon/>
                  break;
                case 3:
                  route = '/adjoin2';
                  icon = <RemoveRoadOutlinedIcon/>
                  break;  
                default:
                  break;
              }
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton component={Link} to={route}>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <List>
            <Divider />
              <h1 className='flex justify-center font-semibold bg-slate-100'>Matriks 3 x 3</h1>
            <Divider />
            {['Determinan','minor','Kofakor','Adjoin'].map((text, index) => {
              let route;
              let icon;
              switch (index) {
                case 0:
                  route = '/determinan3'
                  icon = <CalculateOutlinedIcon/>
                  break;
                case 1:
                  route = '/minor3'
                  icon = <ExtensionOutlinedIcon/>
                  break;
                case 2:
                  route = '/kofaktor3'
                  icon = <AddRoadIcon/>
                  break;
                case 3:
                  route = '/adjoin3'
                  icon = <RemoveRoadOutlinedIcon/>
                  break;
                default:
                  break;
              }
              return(
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={route}>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              );
            })}
          </List>
        <Divider />
          <List>
            {['Riwayat','Hapus Riwayat', 'Home',].map((text, index) => {
              let route;
              let icon;
              let OnClickAction;
              switch (index) {
                case 0:
                  route = '/riwayat'
                  icon =  <History/>
                  break;
                case 1:
                  OnClickAction = (e) => {
                    e.preventDefault();
                    localStorage.clear("DetOrdo2");
                    localStorage.clear("MinorOrdo2");
                    localStorage.clear("KofOrdo2");
                    localStorage.clear("AdjOrdo2");
                    localStorage.clear("DetOrdo3");
                    localStorage.clear("MinorOrdo3");
                    localStorage.clear("KofOrdo3");
                    localStorage.clear("AdjOrdo3");
                  }
                  icon =  <DeleteForeverOutlinedIcon/>
                  break;
                case 2:
                  route = '/'
                  icon = <Home/>
                  break;
                default:
                  break;
              }
              return(
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={route} onClick={OnClickAction}>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              );
            })}
          </List>
        </Drawer>
      <Main open={open}>
      <DrawerHeader/>
        {props.children}
      </Main>
    </Box>
  );
}