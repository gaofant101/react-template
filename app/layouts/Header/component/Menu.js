import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

export const RenderMenu = (props) => {
    const { anchorEl, isMenuOpen, handleMenuClose } = props;
    const menuId = 'primary-account-menu';
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
};

RenderMenu.propTypes = {
    anchorEl: PropTypes.object,
    isMenuOpen: PropTypes.bool,
    handleMenuClose: PropTypes.func,
};

export const RenderMobileMenu = (props) => {
    const {
        mobileMoreAnchorEl,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleProfileMenuOpen,
    } = props;
    const mobileMenuId = 'primary-account-menu-mobile';
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
};

RenderMobileMenu.propTypes = {
    mobileMoreAnchorEl: PropTypes.object,
    isMobileMenuOpen: PropTypes.bool,
    handleMobileMenuClose: PropTypes.func,
    handleProfileMenuOpen: PropTypes.func,
};
