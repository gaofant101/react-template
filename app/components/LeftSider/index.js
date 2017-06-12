/* eslint no-console:0 */
import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftSider extends React.Component {
    state = {
        current: '1',
        openKeys: ['sub1'],
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find((key) => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find((key) => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub4: ['sub3'],
        };
        return map[key] || [];
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
    }
    render() {
        return (
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              style={{ width: '240px', height: '100%' }}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
            >
                <SubMenu key="sub1" title={<span><Icon type="hdd" /><span>Option 1</span></span>}>
                    <Menu.Item key="1"><Link to="/queryAnalysis">Option 2</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/policyCustomization">Option 3</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="switcher" /><span>Option 4</span></span>}>
                    <Menu.Item key="3"><Link to="/organization">Option 5</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/assets">Option 6</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/personnel">Option 7</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="safety" /><span>Option 8</span></span>}>
                    <Menu.Item key="6">Option 9</Menu.Item>
                    <SubMenu key="sub4" title="Submenu">
                        <Menu.Item key="7">Option 10</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        );
    }
}
