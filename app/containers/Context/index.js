import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
// import Button from './Button';

import Toolbar from './Toolbar';

import { themes, ThemeContext } from './context';

export default class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
    }

    toggleTheme = () => {
        this.setState((state) => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark,
        }));
    };

    render() {
        const { theme } = this.state;
        return (
            <Wrapper>
                <Row gutter={16}>
                    <Col span={12}>
                        <Spacing>
                            <Card title="index.js">
                                <pre>
                                    {`
<React.Fragment>
    <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={this.toggleTheme} />
    </ThemeContext.Provider>
</React.Fragment>
                                    `}
                                </pre>
                            </Card>
                        </Spacing>
                        <Spacing>
                            <Card title="context.js">
                                <pre>
                                    {`
const themes = {
    light: {
        background: '#000',
        color: '#fff',
    },
    dark: {
        background: '#fff',
        color: '#000',
    },
};

const ThemeContext = React.createContext(
    themes.dark, // default value
);
                                    `}
                                </pre>
                            </Card>
                        </Spacing>
                        <Spacing>
                            <Card title="Toolbar.js">
                                <pre>
                                    {`
const Toolbar = (props) => (
    <div>
        <ThemedButton onClick={props.changeTheme} />
    </div>
);
                                    `}
                                </pre>
                            </Card>
                        </Spacing>
                        <Spacing>
                            <Card title="ThemedButton.js">
                                <pre>
                                    {`
const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <Button
                className={styles.btn}
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                {\`${Object.keys(theme)[0]}: ${theme.background}\`}
            </Button>
        )}
    </ThemeContext.Consumer>
);
                                    `}
                                </pre>
                            </Card>
                        </Spacing>
                    </Col>
                    <Col span={12}>
                        <Card title="显示">
                            <p>React.CreateContext 创建一个顶级contextThemeContext</p>
                            <p>ThemeContext.Provider 传递 context</p>
                            <p>ThemeContext.Consumer 接收 context</p>
                            <p>避免通过props深层次传递, 难以维护的问题</p>
                            <p>下面是示例代码效果, 点击修改Provider传递的value</p>
                            <ThemeContext.Provider value={theme}>
                                <Toolbar changeTheme={this.toggleTheme} />
                            </ThemeContext.Provider>
                        </Card>
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}
