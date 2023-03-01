import axios from "axios";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["Карта", "Войти", "Регистрация"];

export default function NavBar({ user }) {
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

  const logoutHandler = () => {
    axios("/api/user/logout")
      .then(() => {
        window.location = "/";
      })
      .catch(console.log);
  };
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     {/* <img src="android-chrome-512x512.png" alt="..." style={{ width: '40px' }} /> */}
    //     {user?.id ? (
    //       <a className="navbar-brand" href="/">
    //         Привет,
    //         {' '}
    //         {user.name}
    //       </a>
    //     ) : (
    //       <a className="navbar-brand" href="/">
    //         Гость
    //       </a>
    //     )}
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <a className="nav-link active" href="/">Домашняя страница</a>
    //         {user?.isAdmin ? <a className="nav-link" href="/api/OneCard">Ваш аккаунт</a> : null}
    //         {!user?.id ? <a className="nav-link" href="/login">Авторизация</a> : null}
    //         {!user?.id ? <a className="nav-link" href="/signup">Регистрация</a> : null}
    //       </div>
    //     </div>
    //     {user?.id
    //     && (
    //       <Stack direction="row" spacing={2}>
    //         <Avatar {...stringAvatar(`${user?.name} ${user?.secondName}`)} />
    //         <button onClick={logoutHandler} type="button" className="btn btn-dark">
    //           Выйти из аккаунта
    //         </button>
    //       </Stack>
    //     )}
    //   </div>
    // </nav>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia
            component="img"
            sx={{ width: 70, height: 70, padding: 2 }}
            image="https://svgsilh.com/svg_v2/309641.svg"
            alt="Live from space album cover"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Чаепитие
          </Typography>

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
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
          >
            Чаепитие
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!user?.id ? (
              <>
                <Button
                  onClick={() => {
                    window.location = "/login";
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Войти
                </Button>
                <Button
                  onClick={() => {
                    window.location = "/signup";
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Зарегистрироваться
                </Button>
              </>
            ) : null}
            {user?.isAdmin ? (
              <Button
                onClick={() => {
                  window.location = "/api/OneCard";
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Форма добавления
              </Button>
            ) : null}
          </Box>
          {user?.id ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Открыть меню">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
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
                <MenuItem>
                  <Typography textAlign="center">
                    <Link
                      to="/profile"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Профиль
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                  <Typography textAlign="center">Выйти</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
