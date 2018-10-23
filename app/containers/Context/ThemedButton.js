import React from 'react';
import styles from './style.less';
import { ThemeContext } from './context';

const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <button
                type="button"
                className={styles.btn}
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                {`${Object.keys(theme)[0]}: ${theme.background}`}
            </button>
        )}
    </ThemeContext.Consumer>
);

export default ThemedButton;
