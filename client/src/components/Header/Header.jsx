// React
import React, { useState } from "react";

// React-Router-Dom
import { Link } from "react-router-dom";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

function Header() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  // Functions for the MUI component
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#2C414E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Link to="/" className="nav__element">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textDecoration: "none" }}
            >
              NASA APP
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "#C9E0F8" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/landings" style={{ color: "#2C414E", textDecoration: "none" }}>
                  <Typography textAlign="center">
                    Landings
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/neas" style={{ color: "#2C414E", textDecoration: "none" }}>
                  <Typography textAlign="center">
                    Near Earth Objects
                  </Typography>
                </Link>
              </MenuItem>
              {isAuthenticated
                ? <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/cart" style={{ color: "#2C414E", textDecoration: "none" }}>
                    <Typography textAlign="center">
                      Shopping cart
                    </Typography>
                  </Link>
                </MenuItem>
                : ""
              }
            </Menu>

          </Box>

          <Typography
            className="nav__element"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            NASA APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >

            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/landings" className="nav__element">
                <Typography textAlign="center">
                  Landings
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/neas" className="nav__element">
                <Typography textAlign="center">
                  Near Earth Objects
                </Typography>
              </Link>
            </MenuItem>
            {isAuthenticated
              ? <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/cart" className="nav__element">
                  <Typography textAlign="center">
                    Shopping cart
                  </Typography>
                </Link>
              </MenuItem>
              : ""
            }
          </Box>

          {isAuthenticated
            ? <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src={user.picture} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
            : <Box sx={{ flexGrow: 0 }}>
              <MenuItem onClick={loginWithRedirect}>
                <Typography className="nav__element" textAlign="center">Login</Typography>
              </MenuItem>
            </Box>
          }

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header