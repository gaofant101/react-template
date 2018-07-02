import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

import styles from './style.css';
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
            <div className={styles.box}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="index.js" className={styles.cardUse}>
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
                        <Card title="context.js" className={styles.cardUse}>
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
                        <Card title="Toolbar.js" className={styles.cardUse}>
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
                        <Card
                            title="ThemedButton.js"
                            className={styles.cardUse}
                        >
                            <pre>
                                {`
const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <button
                className={styles.btn}
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                {\`${Object.keys(theme)[0]}: ${theme.background}\`}
            </button>
        )}
    </ThemeContext.Consumer>
);
                                `}
                            </pre>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="显示">
                            <p>
                                React.CreateContext 创建一个顶级context
                                ThemeContext
                            </p>
                            <p>ThemeContext.Provider 传递 context</p>
                            <p>ThemeContext.Consumer 接收 context</p>
                            <p>避免通过props深层次传递, 难以维护的问题</p>
                            <p>
                                下面是示例代码效果, 点击修改Provider传递的value
                            </p>
                            <ThemeContext.Provider value={theme}>
                                <Toolbar changeTheme={this.toggleTheme} />
                            </ThemeContext.Provider>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
