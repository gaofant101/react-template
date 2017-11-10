import React from 'react';
import { Layout, Breadcrumb, Col, Icon, BackTop } from 'antd';
import LeftSider from '../../components/LeftSider';
import styles from './style.css';
const { Header, Content, Sider } = Layout;

export default class App extends React.PureComponent {
    static propTypes = {
        children: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
    }
    state = {
        collapsed: false,
        mode: 'inline',
        breadcrumbName: null,
        breadcrumbItemName: null,
        username: '',
    };
    componentWillMount() {
        const route = this.props.children.props.route;
        this.setState({
            breadcrumbName: route.breadcrumbName,
            breadcrumbItemName: route.breadcrumbItemName,
        });
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
    render() {
        return (
            <Layout>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={240} >
                    <div className="logo" />
                    <LeftSider mode={this.state.mode} path={this.props.location.pathname} />
                </Sider>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header>
                        <Col span={8}>
                            <Icon type="appstore" style={{ fontSize: '15px', color: '#fff' }} />
                            <span className={styles.span1}>产品名称</span>
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
                </Layout>
                <BackTop visibilityHeight={100} />
            </Layout>
        );
    }
}
