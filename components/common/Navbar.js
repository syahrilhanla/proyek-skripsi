import React from "react";
import {
	AppBar,
	Avatar,
	Toolbar,
	IconButton,
	MenuItem,
	Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DrawerComponent from "@/components/common/Drawer";
import Tooltip from "@material-ui/core/Tooltip";

import Link from "next/link";
import Image from "next/image";
import { useStyles } from "@/components/data/navbarStyles";
import { useAuth } from "@/components/context/AuthContext";

export default function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	const { signOut, localUserData, isAdmin } = useAuth();

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

	const menuId = "primary-search-account-menu";

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<Link href={isAdmin ? "/admin" : "/dashboard"}>
						<Avatar
							alt={localUserData && localUserData.displayName}
							src={localUserData && localUserData.photoURL}
							className={classes.small}
						/>
					</Link>
				</IconButton>
				<span onClick={() => signOut()}>
					<IconButton
						aria-label='logout'
						aria-controls='primary-search-account-menu'
						aria-haspopup='false'
						color='inherit'
					>
						<ExitToAppIcon />
					</IconButton>
				</span>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static'>
				<Toolbar>
					<Tooltip title='Sidebar'>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
						>
							<MenuIcon />
						</IconButton>
					</Tooltip>
					<div className={classes.title}>
						<div className={classes.logo}>
							<Image src='/stats.svg' height={35} width={40} />
							<h3 style={{ paddingTop: "5px", margin: "0px" }}>
								I/A Statistics
							</h3>
						</div>
					</div>

					<div className={classes.sectionDesktop}>
						<span className={classes.profileDesktop}>
							<IconButton
								edge='end'
								aria-label='account of current user'
								aria-controls={menuId}
								onClick={handleProfileMenuOpen}
								color='inherit'
							>
								<Link href={isAdmin ? "/admin" : "/dashboard"}>
									<Tooltip title={isAdmin ? "Admin" : "Dashboard"}>
										<Avatar
											alt={localUserData && localUserData.displayName}
											src={localUserData && localUserData.photoURL}
											className={classes.small}
										/>
									</Tooltip>
								</Link>
							</IconButton>
						</span>
						<span onClick={() => signOut()}>
							<Tooltip title='Keluar Akun'>
								<IconButton
									edge='end'
									aria-label='sign out'
									aria-controls={menuId}
									onClick={handleProfileMenuOpen}
									color='inherit'
								>
									<ExitToAppIcon />
								</IconButton>
							</Tooltip>
						</span>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
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
