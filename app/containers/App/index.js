import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import LeftSider from '../../components/LeftSider';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={250} style={{ background: '#fff' }}>
                            <LeftSider />
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                HAHAHA
                </Footer>
            </Layout>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;
