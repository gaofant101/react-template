import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '@layouts/Header';
import SecondaryMenu from '@layouts/Menu';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    main: {
        paddingTop: '90px',
        minHeight: '100vh',
    },
}));

const Main = (props) => {
    const { children } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <SecondaryMenu />
            <Container maxWidth="xl" className={classes.main}>
                {children}
            </Container>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node,
};

export default Main;
