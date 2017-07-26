/* eslint no-console:0 */
import { Layout, Breadcrumb, Col, Icon } from 'antd';
import React from 'react';
import LeftSider from '../../components/LeftSider';
import styles from './style.css';
const { Header, Content, Footer, Sider } = Layout;

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        children: React.PropTypes.object,
        location: React.PropTypes.object,
    }
    state = {
        collapsed: false,
        mode: 'inline',
        breadcrumbName: null,
        breadcrumbItemName: null,
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
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    render() {
        return (
            <Layout>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={260} >
                    <div className="logo" />
                    <LeftSider mode={this.state.mode} path={this.props.location.pathname} />
                </Sider>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header className={styles.antlayoutheader}>
                        <Col span={8}>
                            <Icon type="appstore" style={{ fontSize: '15px', color: '#0e77ca' }} />
                            <span className={styles.headtitle}>产品名称</span>
                        </Col>
                        <Col span={4} offset={12} className={styles.headuserCol}>
                            <Icon type="user" style={{ fontSize: '14px', color: '#0e77ca' }} />
                            <span className={styles.headuser}>admin</span>
                            <a>
                                <Icon type="logout" style={{ fontSize: '13px', color: '#0e77ca', fontWeight: 'bold' }} />
                            </a>
                        </Col>
                    </Header>
                    <Breadcrumb className={styles.breadcrumb}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.breadcrumbName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.breadcrumbItemName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className={styles.antdlayoutcontent}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        react-temp
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
