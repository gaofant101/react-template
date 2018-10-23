import React from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { privateRoutes } from 'routers';

import ErrorBoundary from 'components/ErrorBoundary';

import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import SiderColumn from 'components/SiderColumn';
import UserHeader from 'components/UserHeader';
import styles from './style.less';

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
                    <Content className={styles.content}>
                        <ErrorBoundary>
                            <Switch>
                                {privateRoutes.map((route, index) => (
                                    <RouteWithSubRoutes
                                        key={index.toString()}
                                        {...route}
                                    />
                                ))}
                            </Switch>
                        </ErrorBoundary>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
