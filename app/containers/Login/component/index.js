import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import isEmpty from 'lodash/isEmpty';
import request from '@utils/request';
import encrypt from '@utils/encrypt';

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

const TipsLabel = (message) => (
    <Typography variant="body1" color="error">
        {message === null ? '请输入正确用户名和密码' : message}
    </Typography>
);

// 2019-10-23 高凡
// 获取验证码
const getVerCode = async () =>
    request('api/sendVerifyCode/getVerifyCode', {
        method: 'GET',
    }).then((res) => {
        if (res.code === 200) {
            return res.message;
        }
        return null;
    });

const LoginPage = (props) => {
    const { isAuthenticated, requestLogin, history } = props;
    const classes = useStyles();
    const { from } = history.location.state || { from: { pathname: '/' } };
    const userNameRef = useRef(null);
    const userPwdRef = useRef(null);
    const userCodeRef = useRef(null);

    // 定义表单
    const [formdata, setFormdata] = useState({
        account: '',
        password: '',
        code: '',
    });

    // 定义表单验证状态
    const [formvalidator, setFormvalidator] = useState({
        account: false,
        password: false,
        code: false,
    });

    // 定义错误状态
    const [isErrorState, setErrorState] = useState({
        state: false,
        message: null,
    });

    // 定义验证码图片
    const [verCodeSrc, setVerCodeSrc] = useState(null);

    const formChange = (e) => {
        setFormdata({
            ...formdata,
            [e.currentTarget.name]: e.currentTarget.value,
        });

        if (e.currentTarget.name === 'password') {
            setFormdata({
                ...formdata,
                password: encrypt(e.currentTarget.value),
            });
        }

        setFormvalidator({
            ...formvalidator,
            [e.currentTarget.name]: isEmpty(e.currentTarget.value),
        });
    };

    const login = () => {
        if (
            !isEmpty(formdata.account) &&
            !isEmpty(formdata.password) &&
            !isEmpty(formdata.code) &&
            (!formvalidator.account && !formvalidator.password && !formvalidator.code)
        ) {
            request('api/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formdata),
            }).then((res) => {
                if (res.code === 200) {
                    requestLogin();
                } else {
                    // 提示错误
                    setErrorState({
                        state: true,
                        message: res.message,
                    });
                    // 清除文本框内容&&清空formdata里面的值
                    userPwdRef.current.focus();
                    userPwdRef.current.value = '';
                    userCodeRef.current.value = '';
                    setFormdata({
                        ...formdata,
                        password: '',
                        code: '',
                    });
                    // 重新请求code
                    handleVerCode();
                }
            });
        }
    };

    // 输入验证码过后回车登录
    const enterLogin = (e) => {
        if (e.keyCode === 13) {
            login();
        }
    };

    // 获取code
    const handleVerCode = () => {
        getVerCode().then((res) => {
            setVerCodeSrc(`data:image/png;base64,${res}`);
        });
    };

    // 2019-10-16 高凡
    // 通过调用接口，检查登录状态
    const checkLoginState = () => {
        request('api/info', {
            method: 'POST',
        }).then((res) => {
            if (res.code === 200) {
                requestLogin();
            }
        });
    };

    // 在第一次加载的时候尝试是否登录
    // 调用 handleVerCode 方法
    useEffect(() => {
        handleVerCode();
        checkLoginState();
    }, [checkLoginState]);

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
                            inputRef={userNameRef}
                            margin="normal"
                            variant="outlined"
                            id="account"
                            label="用户名"
                            name="account"
                            autoComplete="account"
                            autoFocus
                            onBlur={formChange}
                            error={formvalidator.account}
                        />
                        <TextField
                            required
                            fullWidth
                            inputRef={userPwdRef}
                            margin="normal"
                            variant="outlined"
                            name="password"
                            label="密码"
                            type="password"
                            onBlur={formChange}
                            error={formvalidator.password}
                        />
                        <Grid container className={classes.root} spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justify="center">
                                    <Grid item xs={8}>
                                        <TextField
                                            required
                                            inputRef={userCodeRef}
                                            margin="normal"
                                            variant="outlined"
                                            name="code"
                                            label="验证码"
                                            onChange={formChange}
                                            error={formvalidator.code}
                                            onKeyUp={enterLogin}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box mt={2}>
                                            {verCodeSrc !== null ? (
                                                <Box>
                                                    <img
                                                        src={verCodeSrc}
                                                        height="50"
                                                        alt="验证码"
                                                        role="presentation"
                                                        onClick={handleVerCode}
                                                    />
                                                </Box>
                                            ) : null}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {isErrorState.state ? (
                            <Box mt={1}>
                                <Fade in timeout={1}>
                                    {TipsLabel(isErrorState.message)}
                                </Fade>
                            </Box>
                        ) : null}
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
