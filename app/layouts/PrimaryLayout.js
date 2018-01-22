import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
} from 'antd';

import SiderColumn from 'components/SiderColumn';
import styles from './style.css';

const {
  Header,
  Content,
} = Layout;

export default class PrimaryLayout extends Component {
    state = {
        collapsed: false,
    }
    toggle = () => {
        // this.setState({
        //     collapsed: !this.state.collapsed,
        // });
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    }
    render() {
        return (
            <Layout>
                <SiderColumn collapsed={this.state.collapsed} />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon className={styles.trigger} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
                        <div className={styles.user}>
                            {/* 123 */}
                        </div>
                    </Header>
                    <Content
                      style={{
                          margin: '12px',
                          padding: 12,
                          background: '#fff',
                      }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

PrimaryLayout.propTypes = {
    children: PropTypes.node,
};
