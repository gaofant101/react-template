import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    '@keyframes fadein': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },
    s1: {
        width: '100%',
        height: '100%',
        animation: '$fadein 0.5s ease-in 0.1s both',
        textAlign: 'center',
        paddingTop: '10vh',
        color: '#2196f3',
        '& a': {
            color: '#2196f3',
        },
    },
    link: {
        margin: theme.spacing(1),
        fontSize: '20px',
    },
}));

const Welcome = () => {
    console.log('do something...');
    const classes = useStyles();
    return (
        <div className={classes.s1}>
            <Box>
                <Typography variant="h2" gutterBottom>
                    MATERIAL-UI
                </Typography>
            </Box>
            <Link
                href="https://material-ui.com/"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                v4.4.2
            </Link>
            <Link
                href="https://reactjs.org/docs/hooks-intro.html"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                react - v16.9.0
            </Link>
            <Link
                href="https://reacttraining.com/react-router/web/example/basic"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                react-router-dom
            </Link>
            <Link
                href="https://redux.js.org/introduction/getting-started"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                redux.js
            </Link>
            <Link
                href="https://redux.js.org/introduction/getting-started"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                redux-thunk
            </Link>
            <Link
                href="https://lodash.com/"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                lodash
            </Link>
            <Link
                href="https://github.com/eslint/eslint"
                target="_blank"
                className={classes.link}
                underline="hover"
            >
                eslint
            </Link>
            {/* <Link component={RouterLink} to="/help">
                Ref forwarding
            </Link> */}
        </div>
    );
};

export default Welcome;
