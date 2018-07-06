import React from 'react';
import PropTypes from 'prop-types';
import ThemedButton from './ThemedButton';

const Toolbar = (props) => {
    const { changeTheme } = props;
    return (
        <div>
            <ThemedButton onClick={changeTheme} />
        </div>
    );
};

Toolbar.propTypes = {
    changeTheme: PropTypes.func,
};

export default Toolbar;
