import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const MadeWithLove = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Built with love by the '}
        <Link color="inherit" href="https://material-ui.com/">
            AICSO
        </Link>
        {' team.'}
    </Typography>
);

const LoginPage = (props) => {
    const { isAuthenticated, requestLogin, history } = props;
    const classes = useStyles();
    const { from } = history.location.state || { from: { pathname: '/' } };

    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
    });

    const [formvalidator, setFormvalidator] = useState({
        email: false,
        password: false,
    });

    const formChange = (e) => {
        setFormdata({
            ...formdata,
            [e.currentTarget.name]: e.currentTarget.value,
        });
        setFormvalidator({
            ...formvalidator,
            [e.currentTarget.name]: isEmpty(e.currentTarget.value),
        });
    };

    const login = () => {
        if (
            !isEmpty(formdata.email) &&
            !isEmpty(formdata.password) &&
            (!formvalidator.email && !formvalidator.password)
        ) {
            requestLogin();
        }
    };

    if (isAuthenticated === 'true') {
        return <Redirect to={from} />;
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <form className={classes.form} autoComplete="off">
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onBlur={formChange}
                            error={formvalidator.email}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="password"
                            label="password"
                            type="password"
                            autoComplete="current-password"
                            onBlur={formChange}
                            error={formvalidator.password}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="记住我"
                        />
                        <Box mt={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={login}
                            >
                                登录
                            </Button>
                        </Box>
                        <Box mt={3}>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="www" variant="body2">
                                        忘记密码?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="www" variant="body2">
                                        {'还没有账户? 注册'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </div>
                <Box mt={5}>
                    <MadeWithLove />
                </Box>
            </Container>
        </>
    );
};

LoginPage.propTypes = {
    requestLogin: PropTypes.func,
    isAuthenticated: PropTypes.string,
    history: PropTypes.object,
};

export default LoginPage;
