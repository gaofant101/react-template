import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { privateRoutes } from 'routers';

import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import SiderColumn from 'components/SiderColumn';
import UserHeader from 'components/UserHeader';
import Wrapper from './Wrapper';

const { Content } = Layout;

export default class PrimaryLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <SiderColumn collapsed={collapsed} />
                <Layout>
                    <UserHeader collapsed={collapsed} toggle={this.toggle} />
                    <Wrapper>
                        <Content>
                            <Switch>
                                {privateRoutes.map((route, index) => (
                                    <RouteWithSubRoutes key={index.toString()} {...route} />
                                ))}
                            </Switch>
                        </Content>
                    </Wrapper>
                </Layout>
            </Layout>
        );
    }
}
