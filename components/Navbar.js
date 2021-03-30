import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DrawerComponent from './Drawer';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from './context/AuthContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(4),
  },
  title: {
    width: '87%'
  },
  small: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
  logo: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    width: '15%'
  },
  sectionDesktop: {
    display: 'none',
    marginRight: '2rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      paddingRight: '2rem'
    },
    float: 'right'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  profileDesktop: {
    paddingRight: '1.5rem'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const { signOut, localUserData } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Link href={'/dashboard'}>
            <Avatar alt={localUserData && localUserData.displayName} src={localUserData && localUserData.photoURL} className={classes.small} />
          </Link>
        </IconButton>
        <IconButton
          aria-label="logout"
          aria-controls="primary-search-account-menu"
          aria-haspopup="false"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <div className={classes.logo}>
              <Image src="/stats.svg" height={35} width={40} />
              <h3 style={{ paddingTop: '5px', margin: '0px' }}>I/A Statistics</h3>
            </div>
          </div>

          <div className={classes.sectionDesktop}>

            <span className={classes.profileDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Link href={'/dashboard'}>
                  <Avatar alt={localUserData && localUserData.displayName} src={localUserData && localUserData.photoURL} className={classes.small} />
                </Link>
              </IconButton>
            </span>
            <span onClick={() => signOut()}>
              <IconButton
                edge="end"
                aria-label="sign out"
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
            </span>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreHorizIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      {renderMobileMenu}
    </div>
  );
}