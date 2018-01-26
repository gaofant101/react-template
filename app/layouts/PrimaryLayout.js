import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';
import ErrorBoundary from 'components/ErrorBoundary';

import SiderColumn from 'components/SiderColumn';
import UserHeader from 'components/UserHeader';
import styles from './style.css';

const {
  Content,
} = Layout;

export default class PrimaryLayout extends Component {
    state = {
        collapsed: false,
    }
    toggle = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    }
    render() {
        return (
            <Layout>
                <SiderColumn collapsed={this.state.collapsed} />
                <Layout>
                    <UserHeader collapsed={this.state.collapsed} toggle={this.toggle} />
                    <Content className={styles.content}>
                        <ErrorBoundary>
                            {this.props.children}
                        </ErrorBoundary>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

PrimaryLayout.propTypes = {
    children: PropTypes.node,
};
