import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Tabs,
  Row,
  Col,
  Icon,
  Input,
  Button,
  Checkbox,
  Alert,
} from 'antd';
import styles from './style.css';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tapsKey: '1',
            alertErrorType: '',
            alertErrorText: '',
            formBtnLoading: false,
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formBtnLoading: true,
        }, () => {
            setTimeout(() => {
                this.props.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                    if ((values.userName && values.userName !== 'admin') || (values.password && values.password !== 'admin')) {
                        this.setState({
                            alertErrorType: 'username',
                            alertErrorText: '账户或密码错误(admin/admin)',
                        });
                    }
                    if (values.captcha && values.captcha.lenght !== 4) {
                        this.setState({
                            alertErrorType: 'mobile',
                            alertErrorText: '验证码错误',
                        });
                    }
                    if ((values.userName
                         && values.userName === 'admin'
                         && values.password
                         && values.password === 'admin')
                         || (values.mobilenumber
                         && values.captcha
                         && values.lenght === 4)) {
                        this.props.requestLoggedUser();
                        this.setState({
                            alertErrorType: '',
                            alertErrorText: '',
                        });
                    }
                });
                this.setState({
                    formBtnLoading: false,
                });
            }, 1000);
        });
    }
    tabsCallback = (key) => {
        this.setState({
            tapsKey: key,
        });
    }
    render() {
        const { tapsKey, alertErrorType, alertErrorText, formBtnLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Tabs defaultActiveKey="1" onChange={this.tabsCallback}>
                    <TabPane tab="账户密码登录" key="1">
                        {
                            alertErrorType === 'username' && tapsKey === '1' ? <Alert message={alertErrorText} type="error" showIcon className={styles.alerterror} /> : null
                        }
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ],
                                })(<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ],
                                })(<Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="admin" />)
                            }
                        </FormItem>
                    </TabPane>
                    <TabPane tab="手机号登录" key="2">
                        {
                            alertErrorType === 'mobile' && tapsKey === '2' ? <Alert message={alertErrorText} type="error" showIcon className={styles.alerterror} /> : null
                        }
                        <FormItem>
                            {
                                getFieldDecorator('mobilenumber', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your mobile number!',
                                            pattern: /^1\d{10}$/,
                                        },
                                    ],
                                })(<Input size="large" prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="mobile number" />)
                            }
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span={15}>
                                    {
                                        getFieldDecorator('captcha', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your captcha!',
                                                    pattern: /\d{4}$/,
                                                },
                                            ],
                                        })(<Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="captcha" />)
                                    }
                                </Col>
                                <Col span={8} offset={1}>
                                    <Button size="large" className={styles.getCaptcha}>获取验证码</Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </TabPane>
                </Tabs>
                <FormItem>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>自动登录</Checkbox>)
                    }
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" loading={formBtnLoading}>
                        登录
                    </Button>
                    <a href="" className={styles.registerLink}>注册账号</a>
                </FormItem>
            </Form>);
    }
}

NormalLoginForm.propTypes = {
    form: PropTypes.object,
    requestLoggedUser: PropTypes.func,
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
