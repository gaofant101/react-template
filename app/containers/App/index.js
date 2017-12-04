import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axioss';
import { Layout, Breadcrumb, Col, Icon, BackTop } from 'antd';
import LeftSider from '../../components/LeftSider';
import styles from './style.css';
const { Header, Content, Sider, Footer } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            breadcrumbName: null,
            breadcrumbItemName: null,
            username: '',
        };
    }
    componentWillMount() {
        const route = this.props.children.props.route;
        this.setState({
            breadcrumbName: route.breadcrumbName,
            breadcrumbItemName: route.breadcrumbItemName,
        });
        console.log('app componentWillMount');
        this.loadAxios();
    }
    componentWillReceiveProps(nextProps) {
        const route = nextProps.children.props.route;
        this.setState({
            breadcrumbName: route.breadcrumbName,
            breadcrumbItemName: route.breadcrumbItemName,
        });
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    loadGithub = (githubName) => {
        axios.get(`https://api.github.com/users/${githubName}/repos?type=all&sort=updated?name='app'`)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    throw String(err);
                });
    }
    loadAxios = async () => {
        const githubName = 'evanhunt';
        const data = await this.loadGithub(githubName);
        console.log(data);
    }
    render() {
        return (
            <Layout>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200} >
                    <div className="logo" />
                    <LeftSider mode={this.state.mode} path={this.props.location.pathname} />
                </Sider>
                <Layout>
                    <Header>
                        <Col span={8}>
                            <Icon type="appstore" style={{ fontSize: '15px', color: '#fff' }} />
                            <span className={styles.productname}>产品名称</span>
                        </Col>
                        <Col span={1} offset={15}>
                            <a style={{ marginRight: 20 }}>
                                <Icon type="user" style={{ fontSize: '14px', color: '#fff' }} />
                            </a>
                            <a>
                                <Icon type="logout" style={{ fontSize: '13px', color: '#fff', fontWeight: 'bold' }} />
                            </a>
                        </Col>
                    </Header>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.breadcrumbName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.breadcrumbItemName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className={styles.antdlayoutcontent}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        @Hello World
                    </Footer>
                </Layout>
                <BackTop visibilityHeight={100} />
            </Layout>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};
