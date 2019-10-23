import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { RenderMenu, RenderMobileMenu } from './Menu';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const PrimaryAppBar = ({ open, drawerOpen, drawerClose }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const toggleSecendMenu = () => {
        if (open) {
            drawerClose();
        } else {
            drawerOpen();
        }
    };

    return (
        <React.Fragment key="layouts/Header/index">
            <AppBar position="fixed" className={classes.grow}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        onClick={toggleSecendMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        安全运营平台
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <RenderMenu
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
            />
            <RenderMobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
        </React.Fragment>
    );
};

PrimaryAppBar.propTypes = {
    open: PropTypes.bool,
    drawerOpen: PropTypes.func,
    drawerClose: PropTypes.func,
};

export default PrimaryAppBar;
