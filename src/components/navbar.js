import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./navbar.css";

const pages = ["About me", "Projects", "Blog", "Get in touch"];

export default function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [navbarColor, setNavbarColor] = React.useState("#ffffff00");
	const [elevation, setElevation] = React.useState(0);

	const navigateToView = (val) => {
		const anchor = document.getElementById(`${val}`);
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = (val) => {
		navigateToView(val);
		setAnchorElNav(null);
	};

	const changeNavbarColor = () => {
		if (window.scrollY >= 100) {
			setNavbarColor("#47aba9");
			setElevation(10);
		} else {
			setNavbarColor("#ffffff00");
			setElevation(0);
		}
	};

	window.addEventListener("scroll", changeNavbarColor);

	return (
		<AppBar
			style={{ background: navbarColor }}
			position="fixed"
			elevation={elevation}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
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
							}}>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={() => handleCloseNavMenu(page.split(" ").join(""))}>
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
						}}>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => handleCloseNavMenu(page.split(" ").join(""))}
								sx={{
									width: "25%",
									pt: "1.5%",
									pb: "1%",
									color: "#fee528",
									display: "flex",
									fontWeight: "bold",
									fontSize: "15px",
								}}
								className="retro-font">
								{page}
							</Button>
						))}
						<img className="w-28 h-10 my-auto" src="assets/heart.png" alt="hearts"/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
