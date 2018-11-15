import React from 'react';
import Button from './Button';
import { ThemeContext } from './context';

const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <Button
                type="button"
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                {`${Object.keys(theme)[0]}: ${theme.background}`}
            </Button>
        )}
    </ThemeContext.Consumer>
);

export default ThemedButton;
