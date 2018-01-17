import React from 'react';
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

let collapsed = false;
const toggle = () => {
    collapsed = !collapsed;
};

const PrimaryLayout = (props) => (
    <Layout>
        <SiderColumn collapsed={collapsed} />
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon className={styles.trigger} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
            </Header>
            <Content
              style={{
                  margin: '12px',
                  padding: 12,
                  background: '#fff',
              }}
            >
                {props.children}
            </Content>
        </Layout>
    </Layout>
);

PrimaryLayout.propTypes = {
    children: PropTypes.node,
};

export default PrimaryLayout;
