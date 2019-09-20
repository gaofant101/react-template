import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import MainListItems from './MainListItems';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        paddingTop: '60px',
        zIndex: 1,
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7),
        },
    },
}));

const Menu = (props) => {
    const classes = useStyles();
    const { open } = props;
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerPaper]: open,
                [classes.drawerPaperClose]: !open,
            })}
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <List>
                <MainListItems />
            </List>
        </Drawer>
    );
};

Menu.propTypes = {
    open: PropTypes.bool,
};

export default Menu;
