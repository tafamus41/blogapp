import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

function NavBar() {
  const { logout } = useAuthCalls();

  const currentUser = useSelector((state) => state.auth.username);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "70px",
        px: "1rem",
        alignContent: "center",
      }}
    >
      <Box maxWidth="xxl">
        <Toolbar disableGutters>
          <CardMedia
            image="https://images.penguinrandomhouse.com/cover/9780593463291"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              mr: 1,
              borderRadius: "50%",
              height: 70,
              width: 70,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{
                mt: "40px",
                display: { xs: "block", md: "none" },
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                }}
              >
                <Button onClick={handleCloseNavMenu} sx={{ color: "white" }}>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    DASHBOARD
                  </Link>
                </Button>
                <Button onClick={handleCloseNavMenu} sx={{ color: "white" }}>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to="/newBlog"
                  >
                    NEW BLOG
                  </Link>
                </Button>
                <Button onClick={handleCloseNavMenu} sx={{ color: "white" }}>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to="/about"
                  >
                    ABOUT
                  </Link>
                </Button>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <CardMedia
            image="https://images.penguinrandomhouse.com/cover/9780593463291"
            sx={{
              display: { xs: "flex", md: "none", height: 70, width: 70 },
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 1, color: "white" }}
            >
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                DASHBOARD
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 1, color: "white" }}
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "20px",
                }}
                to="/newBlog"
              >
                NEW BLOG
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 1, color: "white" }}
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "20px",
                }}
                to="/about"
              >
                ABOUT
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                [
                  { text: "My Blogs", link: "/myblogs" },
                  { text: "Profile", link: "/profile" },
                  { text: "Logout", link: "/", onClick: logout },
                ].map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={item.link}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </Link>
                  </MenuItem>
                ))
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
}
export default NavBar;
