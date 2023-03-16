import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";

const EducationNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => (
    <div>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="My Account" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SchoolIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="My Courses" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <InfoIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </MenuItem>
    </div>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
          Education IIMST
        </Typography>
        {isMobile ? (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                width: "20ch",
              },
            }}
          >
            {renderMenuItems()}
          </Menu>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/courses">
              <SchoolIcon sx={{ mr: 1 }} />
              Courses
            </Button>
            <Button color="inherit" component={Link} to="/teachers">
              <PersonIcon sx={{ mr: 1 }} />
              Teachers
            </Button>
            <Button color="inherit" component={Link} to="/about">
              <InfoIcon sx={{ mr: 1 }} />
              About Us
            </Button>
          </>
        )}
        <IconButton
          color="inherit"
          aria-label="account"
          onClick={handleMenuOpen}
          sx={{ ml: 2 }}
        >
          <AccountCircleIcon />
        </IconButton>
        {isMobile ? null : (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                marginTop: "40px",
              },
            }}
          >
            {renderMenuItems()}
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default EducationNavbar;



